import { MsgAddLimitOrder, MsgAddMarketOrder, MsgCancelOrder, MsgCancelReplaceLimitOrder, MsgCancelReplaceMarketOrder } from '../../codecs/em/market/v1/tx'
import { EncodeObject } from '@cosmjs/proto-signing'

export interface MsgAddLimitOrderEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.market.v1.MsgAddLimitOrder';
  readonly value: Partial<MsgAddLimitOrder>;
}

export function isMsgAddLimitOrderEncodeObject (encodeObject: EncodeObject): encodeObject is MsgAddLimitOrderEncodeObject {
  return (encodeObject as MsgAddLimitOrderEncodeObject).typeUrl === '/em.market.v1.MsgAddLimitOrder'
}

export interface MsgAddMarketOrderEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.market.v1.MsgAddMarketOrder';
  readonly value: Partial<MsgAddMarketOrder>;
}

export function isMsgAddMarketOrderEncodeObject (encodeObject: EncodeObject): encodeObject is MsgAddMarketOrderEncodeObject {
  return (encodeObject as MsgAddMarketOrderEncodeObject).typeUrl === '/em.market.v1.MsgAddMarketOrder'
}

export interface MsgCancelOrderEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.market.v1.MsgCancelOrder';
  readonly value: Partial<MsgCancelOrder>;
}

export function isMsgCancelOrderEncodeObject (encodeObject: EncodeObject): encodeObject is MsgCancelOrderEncodeObject {
  return (encodeObject as MsgCancelOrderEncodeObject).typeUrl === '/em.market.v1.MsgCancelOrder'
}

export interface MsgCancelReplaceLimitOrderEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.market.v1.MsgCancelReplaceLimitOrder';
  readonly value: Partial<MsgCancelReplaceLimitOrder>;
}

export function isMsgCancelReplaceLimitOrderEncodeObject (encodeObject: EncodeObject): encodeObject is MsgCancelReplaceLimitOrderEncodeObject {
  return (encodeObject as MsgCancelReplaceLimitOrderEncodeObject).typeUrl === '/em.market.v1.MsgCancelReplaceLimitOrder'
}

export interface MsgCancelReplaceMarketOrderEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.market.v1.MsgCancelReplaceMarketOrder';
  readonly value: Partial<MsgCancelReplaceMarketOrder>;
}

export function isMsgCancelReplaceMarketOrderEncodeObject (encodeObject: EncodeObject): encodeObject is MsgCancelReplaceMarketOrderEncodeObject {
  return (encodeObject as MsgCancelReplaceMarketOrderEncodeObject).typeUrl === '/em.market.v1.MsgCancelReplaceMarketOrder'
}
