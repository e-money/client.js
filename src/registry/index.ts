import { GeneratedType, Registry } from '@cosmjs/proto-signing'
import { MsgAcknowledgement, MsgChannelCloseConfirm, MsgChannelCloseInit, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelOpenInit, MsgChannelOpenTry, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose } from 'cosmjs-types/ibc/core/channel/v1/tx'
import { MsgAddLimitOrder, MsgAddMarketOrder, MsgCancelOrder, MsgCancelReplaceLimitOrder, MsgCancelReplaceMarketOrder } from '../codecs/em/market/v1/tx'
import { MsgBeginRedelegate, MsgCreateValidator, MsgDelegate, MsgEditValidator, MsgUndelegate } from 'cosmjs-types/cosmos/staking/v1beta1/tx'
import { MsgConnectionOpenAck, MsgConnectionOpenConfirm, MsgConnectionOpenInit, MsgConnectionOpenTry } from 'cosmjs-types/ibc/core/connection/v1/tx'
import { MsgCreateClient, MsgSubmitMisbehaviour, MsgUpdateClient, MsgUpgradeClient } from 'cosmjs-types/ibc/core/client/v1/tx'
import { MsgCreateIssuer, MsgDestroyIssuer, MsgReplaceAuthority, MsgScheduleUpgrade, MsgSetGasPrices } from '../codecs/em/authority/v1/tx'
import { MsgDecreaseMintable, MsgIncreaseMintable, MsgRevokeLiquidityProvider, MsgSetInflation } from '../codecs/em/issuer/v1/tx'
import { MsgBurnTokens, MsgMintTokens } from '../codecs/em/liquidityprovider/v1/tx'
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission } from 'cosmjs-types/cosmos/distribution/v1beta1/tx'
import { MsgMultiSend } from 'cosmjs-types/cosmos/bank/v1beta1/tx'
import { MsgTransfer } from 'cosmjs-types/ibc/applications/transfer/v1/tx'

// Below are the message types supported by em-ledger
export const registryTypes: ReadonlyArray<[string, GeneratedType]> = [
  // Stargate
  ['/cosmos.bank.v1beta1.MsgMultiSend', MsgMultiSend],
  ['/cosmos.distribution.v1beta1.MsgSetWithdrawAddress', MsgSetWithdrawAddress],
  ['/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward', MsgWithdrawDelegatorReward],
  ['/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission', MsgWithdrawValidatorCommission],
  ['/cosmos.staking.v1beta1.MsgBeginRedelegate', MsgBeginRedelegate],
  ['/cosmos.staking.v1beta1.MsgCreateValidator', MsgCreateValidator],
  ['/cosmos.staking.v1beta1.MsgDelegate', MsgDelegate],
  ['/cosmos.staking.v1beta1.MsgEditValidator', MsgEditValidator],
  ['/cosmos.staking.v1beta1.MsgUndelegate', MsgUndelegate],
  ['/ibc.core.channel.v1.MsgChannelOpenInit', MsgChannelOpenInit],
  ['/ibc.core.channel.v1.MsgChannelOpenTry', MsgChannelOpenTry],
  ['/ibc.core.channel.v1.MsgChannelOpenAck', MsgChannelOpenAck],
  ['/ibc.core.channel.v1.MsgChannelOpenConfirm', MsgChannelOpenConfirm],
  ['/ibc.core.channel.v1.MsgChannelCloseInit', MsgChannelCloseInit],
  ['/ibc.core.channel.v1.MsgChannelCloseConfirm', MsgChannelCloseConfirm],
  ['/ibc.core.channel.v1.MsgRecvPacket', MsgRecvPacket],
  ['/ibc.core.channel.v1.MsgTimeout ', MsgTimeout],
  ['/ibc.core.channel.v1.MsgTimeoutOnClose', MsgTimeoutOnClose],
  ['/ibc.core.channel.v1.MsgAcknowledgement', MsgAcknowledgement],
  ['/ibc.core.client.v1.MsgCreateClient', MsgCreateClient],
  ['/ibc.core.client.v1.MsgUpdateClient', MsgUpdateClient],
  ['/ibc.core.client.v1.MsgUpgradeClient', MsgUpgradeClient],
  ['/ibc.core.client.v1.MsgSubmitMisbehaviour', MsgSubmitMisbehaviour],
  ['/ibc.core.connection.v1.MsgConnectionOpenInit', MsgConnectionOpenInit],
  ['/ibc.core.connection.v1.MsgConnectionOpenTry', MsgConnectionOpenTry],
  ['/ibc.core.connection.v1.MsgConnectionOpenAck', MsgConnectionOpenAck],
  ['/ibc.core.connection.v1.MsgConnectionOpenConfirm', MsgConnectionOpenConfirm],
  ['/ibc.applications.transfer.v1.MsgTransfer', MsgTransfer],

  // Authority
  ['/em.authority.v1.MsgCreateIssuer', MsgCreateIssuer],
  ['/em.authority.v1.MsgDestroyIssuer', MsgDestroyIssuer],
  ['/em.authority.v1.MsgReplaceAuthority', MsgReplaceAuthority],
  ['/em.authority.v1.MsgScheduleUpgrade', MsgScheduleUpgrade],
  ['/em.authority.v1.MsgSetGasPrices', MsgSetGasPrices],

  // Issuer
  ['/em.issuer.v1.MsgIncreaseMintable', MsgIncreaseMintable],
  ['/em.issuer.v1.MsgDecreaseMintable', MsgDecreaseMintable],
  ['/em.issuer.v1.MsgRevokeLiquidityProvider', MsgRevokeLiquidityProvider],
  ['/em.issuer.v1.MsgSetInflation', MsgSetInflation],

  // Liquidity Provider
  ['/em.liquidityprovider.v1.MsgMintTokens', MsgMintTokens],
  ['/em.liquidityprovider.v1.MsgBurnTokens', MsgBurnTokens],

  // Market
  ['/em.market.v1.MsgAddLimitOrder', MsgAddLimitOrder],
  ['/em.market.v1.MsgAddMarketOrder', MsgAddMarketOrder],
  ['/em.market.v1.MsgCancelOrder', MsgCancelOrder],
  ['/em.market.v1.MsgCancelReplaceLimitOrder', MsgCancelReplaceLimitOrder],
  ['/em.market.v1.MsgCancelReplaceMarketOrder', MsgCancelReplaceMarketOrder]
]

export function createRegistry (): Registry {
  return new Registry(registryTypes)
}
