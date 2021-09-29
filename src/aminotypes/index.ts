/* eslint-disable @typescript-eslint/naming-convention */
import { AminoMsgAddLimitOrder, AminoMsgAddMarketOrder, AminoMsgCancelOrder, AminoMsgCancelReplaceLimitOrder } from './messages/market'
import { MsgAddLimitOrder, MsgAddMarketOrder, MsgCancelOrder, MsgCancelReplaceLimitOrder } from '../codecs/em/market/v1/tx'
import { AminoTypes } from '@cosmjs/stargate'
import { emoneyAddressPrefix } from '../config'

export function createAminoTypes () {
  return new AminoTypes({
    prefix: emoneyAddressPrefix,
    additions: {
      '/em.market.v1.MsgAddLimitOrder': {
        aminoType: 'e-money/MsgAddLimitOrder',
        toAmino: ({ owner, clientOrderId, timeInForce, source, destination }: MsgAddLimitOrder): AminoMsgAddLimitOrder['value'] => ({
          owner,
          client_order_id: clientOrderId,
          time_in_force: timeInForce,
          source: source!,
          destination: destination!
        }),
        // eslint-disable-next-line camelcase
        fromAmino: ({ owner, client_order_id, time_in_force, source, destination }: AminoMsgAddLimitOrder['value']): MsgAddLimitOrder => ({
          owner,
          clientOrderId: client_order_id,
          timeInForce: time_in_force,
          source,
          destination
        })
      },
      '/em.market.v1.MsgAddMarketOrder': {
        aminoType: 'e-money/MsgAddMarketOrder',
        toAmino: ({ owner, clientOrderId, timeInForce, source, destination, maximumSlippage }: MsgAddMarketOrder): AminoMsgAddMarketOrder['value'] => ({
          owner,
          client_order_id: clientOrderId,
          time_in_force: timeInForce,
          source: source,
          destination: destination!,
          maximum_slippage: maximumSlippage
        }),
        // eslint-disable-next-line camelcase
        fromAmino: ({ owner, client_order_id, time_in_force, source, destination, maximum_slippage }: AminoMsgAddMarketOrder['value']): MsgAddMarketOrder => ({
          owner,
          clientOrderId: client_order_id,
          timeInForce: time_in_force,
          source,
          destination,
          maximumSlippage: maximum_slippage
        })
      },
      '/em.market.v1.MsgCancelOrder': {
        aminoType: 'e-money/MsgCancelOrder',
        toAmino: ({ owner, clientOrderId }: MsgCancelOrder): AminoMsgCancelOrder['value'] => ({
          owner,
          client_order_id: clientOrderId
        }),
        // eslint-disable-next-line camelcase
        fromAmino: ({ owner, client_order_id }: AminoMsgCancelOrder['value']): MsgCancelOrder => ({
          owner,
          clientOrderId: client_order_id
        })
      },
      '/em.market.v1.MsgCancelReplaceLimitOrder': {
        aminoType: 'e-money/MsgCancelReplaceLimitOrder',
        toAmino: ({ owner, originalClientOrderId, newClientOrderId, timeInForce, source, destination }: MsgCancelReplaceLimitOrder): AminoMsgCancelReplaceLimitOrder['value'] => ({
          owner,
          original_client_order_id: originalClientOrderId,
          new_client_order_id: newClientOrderId,
          time_in_force: timeInForce,
          source: source!,
          destination: destination!
        }),
        // eslint-disable-next-line camelcase
        fromAmino: ({ owner, original_client_order_id, new_client_order_id, time_in_force, source, destination }: AminoMsgCancelReplaceLimitOrder['value']): MsgCancelReplaceLimitOrder => ({
          owner,
          originalClientOrderId: original_client_order_id,
          newClientOrderId: new_client_order_id,
          timeInForce: time_in_force,
          source,
          destination
        })
      }
    }
  })
}
