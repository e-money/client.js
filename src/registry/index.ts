import { GeneratedType, Registry } from '@cosmjs/proto-signing'
import { MsgAddLimitOrder, MsgAddMarketOrder, MsgCancelOrder, MsgCancelReplaceLimitOrder, MsgCancelReplaceMarketOrder } from '../codecs/em/market/v1/tx'
import { MsgBurnTokens, MsgMintTokens } from '../codecs/em/liquidityprovider/v1/tx'
import { MsgCreateIssuer, MsgDestroyIssuer, MsgReplaceAuthority, MsgScheduleUpgrade, MsgSetGasPrices } from '../codecs/em/authority/v1/tx'
import { MsgDecreaseMintable, MsgIncreaseMintable, MsgRevokeLiquidityProvider, MsgSetInflation } from '../codecs/em/issuer/v1/tx'
import { defaultRegistryTypes } from '@cosmjs/stargate'

// Below are the message types supported by em-ledger
export const registryTypes: ReadonlyArray<[string, GeneratedType]> = [
  // Stargate
  ...defaultRegistryTypes,

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
