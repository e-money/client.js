import { AminoTypes, BroadcastTxResponse, Coin, SigningStargateClient, StdFee, createProtobufRpcClient } from '@cosmjs/stargate'
import { Instrument, Order, TimeInForce } from './codecs/em/market/v1/market'
import { QueryClientImpl as MarketQueryClient, QueryOrderResponse } from './codecs/em/market/v1/query'
import { MsgAddLimitOrderEncodeObject, MsgAddMarketOrderEncodeObject, MsgCancelOrderEncodeObject, MsgCancelReplaceLimitOrderEncodeObject, MsgCancelReplaceMarketOrderEncodeObject } from './registry/encodeobjects/market'
import { OfflineSigner } from '@cosmjs/proto-signing'
import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import { createRegistry } from './registry'

export const emoneyAddressPrefix = 'emoney'

export class SigningEmoneyClient extends SigningStargateClient {
  protected readonly marketQueryClient: MarketQueryClient

  protected constructor (tmClient: Tendermint34Client | undefined, signer: OfflineSigner) {
    super(tmClient, signer, {
      registry: createRegistry(),
      aminoTypes: new AminoTypes({ prefix: emoneyAddressPrefix })
    })
    this.marketQueryClient = new MarketQueryClient(createProtobufRpcClient(this.forceGetQueryClient()))
  }

  public static async connectWithSigner (endpoint: string, signer: OfflineSigner): Promise<SigningEmoneyClient> {
    const tmClient = await Tendermint34Client.connect(endpoint)
    return new SigningEmoneyClient(tmClient, signer)
  }

  public static async offline (signer: OfflineSigner): Promise<SigningEmoneyClient> {
    return new SigningEmoneyClient(undefined, signer)
  }

  // Get all instruments and metadata: Last traded price/time and the current best tradable price.
  public async getInstruments () : Promise<Instrument[]> {
    const response = await this.marketQueryClient.Instruments({})
    return response.instruments
  }

  // Get all orders for a given instrument.
  public async getInstrumentOrders (source: string, destination: string) : Promise<QueryOrderResponse[]> {
    const response = await this.marketQueryClient.Instrument({ source, destination })
    return response.orders
  }

  // Get all active by owner address. Once an order expires (by being cancelled or fully filled) it is no longer returned.
  public async getActiveOrders (ownerAddress: string) : Promise<Order[]> {
    const response = await this.marketQueryClient.ByAccount({ address: ownerAddress })
    return response.orders
  }

  // See https://github.com/e-money/em-ledger/blob/master/x/market/spec/02_messages.md#msgaddlimitorder
  // A limit order specifies the limit (worst) price to trade at. When the order is filled it might be filled at a better price (receive "price improvement").
  // The limit price is calculated as: Price = Destination / Source.
  public async addLimitOrder (ownerAddress: string, clientOrderId: string, timeInForce: TimeInForce,
    source: Coin, destination: Coin, fee: StdFee, memo: string = '') : Promise<BroadcastTxResponse> {
    const addLimitOrderMsg: MsgAddLimitOrderEncodeObject = {
      typeUrl: '/em.market.v1.MsgAddLimitOrder',
      value: {
        owner: ownerAddress,
        clientOrderId,
        timeInForce,
        source,
        destination
      }
    }
    return this.signAndBroadcast(ownerAddress, [addLimitOrderMsg], fee, memo)
  }

  // See https://github.com/e-money/em-ledger/blob/master/x/market/spec/02_messages.md#msgaddmarketorder
  // Market orders are converted to limit orders on receipt: The limit price is determined using the last traded price of its instrument,
  // with a slippage value applied to determine the limit price. A market order will be rejected in case the instrument has not been traded yet.
  public async addMarketOrder (ownerAddress: string, clientOrderId: string, timeInForce: TimeInForce,
    source: string, destination: Coin, maximumSlippage: number, fee: StdFee, memo: string = '') : Promise<BroadcastTxResponse> {
    const addMarketOrderMsg: MsgAddMarketOrderEncodeObject = {
      typeUrl: '/em.market.v1.MsgAddMarketOrder',
      value: {
        owner: ownerAddress,
        clientOrderId,
        timeInForce,
        source,
        destination,
        maximumSlippage: maximumSlippage.toFixed()
      }
    }
    return this.signAndBroadcast(ownerAddress, [addMarketOrderMsg], fee, memo)
  }

  // See https://github.com/e-money/em-ledger/blob/master/x/market/spec/02_messages.md#msgcancelorder
  // The unfilled part of an active order can be canceled using MsgCancelOrder.
  public async cancelOrder (ownerAddress: string, clientOrderId: string, fee: StdFee, memo: string = '') : Promise<BroadcastTxResponse> {
    const cancelOrderMsg: MsgCancelOrderEncodeObject = {
      typeUrl: '/em.market.v1.MsgCancelOrder',
      value: {
        owner: ownerAddress,
        clientOrderId
      }
    }
    return this.signAndBroadcast(ownerAddress, [cancelOrderMsg], fee, memo)
  }

  // See https://github.com/e-money/em-ledger/blob/master/x/market/spec/02_messages.md#msgcancelreplacelimitorder
  // The MsgCancelReplaceLimitOrder message is useful for liquidity providers (market makers) who wish to adjust their prices while remaining in the market.
  public async cancelReplaceLimitOrder (ownerAddress: string, originalClientOrderId: string, newClientOrderId: string, timeInForce: TimeInForce,
    source: Coin, destination: Coin, fee: StdFee, memo: string = '') : Promise<BroadcastTxResponse> {
    const cancelReplaceLimitOrderMsg: MsgCancelReplaceLimitOrderEncodeObject = {
      typeUrl: '/em.market.v1.MsgCancelReplaceLimitOrder',
      value: {
        owner: ownerAddress,
        originalClientOrderId,
        newClientOrderId,
        timeInForce,
        source,
        destination
      }
    }
    return this.signAndBroadcast(ownerAddress, [cancelReplaceLimitOrderMsg], fee, memo)
  }

  // See https://github.com/e-money/em-ledger/blob/master/x/market/spec/02_messages.md#msgcancelreplacemarketorder
  // The MsgCancelReplaceMarketOrder message is helpful to adjust prices and slippage for previous market orders while remaining in the market.
  // Please note, The new Market order is converted to limit order on receipt: The limit price is determined using the last traded price of its instrument,
  // with the slippage value applied resulting in the updated limit price.
  public async cancelReplaceMarketOrder (ownerAddress: string, originalClientOrderId: string, newClientOrderId: string, timeInForce: TimeInForce,
    source: string, destination: Coin, maximumSlippage: number, fee: StdFee, memo: string = '') : Promise<BroadcastTxResponse> {
    const cancelReplaceMarketOrderMsg: MsgCancelReplaceMarketOrderEncodeObject = {
      typeUrl: '/em.market.v1.MsgCancelReplaceMarketOrder',
      value: {
        owner: ownerAddress,
        originalClientOrderId,
        newClientOrderId,
        timeInForce,
        source,
        destination,
        maximumSlippage: maximumSlippage.toFixed(10)
      }
    }
    return this.signAndBroadcast(ownerAddress, [cancelReplaceMarketOrderMsg], fee, memo)
  }
}
