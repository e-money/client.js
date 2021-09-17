import { MsgCreateIssuer, MsgDestroyIssuer, MsgReplaceAuthority, MsgScheduleUpgrade, MsgSetGasPrices } from '../../codecs/em/authority/v1/tx'
import { EncodeObject } from '@cosmjs/proto-signing'

export interface MsgCreateIssuerEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.authority.v1.MsgCreateIssuer';
  readonly value: Partial<MsgCreateIssuer>;
}

export function isMsgCreateIssuerEncodeObject (encodeObject: EncodeObject): encodeObject is MsgCreateIssuerEncodeObject {
  return (encodeObject as MsgCreateIssuerEncodeObject).typeUrl === '/em.authority.v1.MsgCreateIssuer'
}

export interface MsgDestroyIssuerEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.authority.v1.MsgDestroyIssuer';
  readonly value: Partial<MsgDestroyIssuer>;
}

export function isMsgDestroyIssuerEncodeObject (encodeObject: EncodeObject): encodeObject is MsgDestroyIssuerEncodeObject {
  return (encodeObject as MsgDestroyIssuerEncodeObject).typeUrl === '/em.authority.v1.MsgDestroyIssuer'
}

export interface MsgReplaceAuthorityEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.authority.v1.MsgReplaceAuthority';
  readonly value: Partial<MsgReplaceAuthority>;
}

export function isMsgReplaceAuthorityEncodeObject (encodeObject: EncodeObject): encodeObject is MsgReplaceAuthorityEncodeObject {
  return (encodeObject as MsgReplaceAuthorityEncodeObject).typeUrl === '/em.authority.v1.MsgReplaceAuthority'
}

export interface MsgScheduleUpgradeEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.authority.v1.MsgScheduleUpgrade';
  readonly value: Partial<MsgScheduleUpgrade>;
}

export function isMsgScheduleUpgradeEncodeObject (encodeObject: EncodeObject): encodeObject is MsgScheduleUpgradeEncodeObject {
  return (encodeObject as MsgScheduleUpgradeEncodeObject).typeUrl === '/em.authority.v1.MsgScheduleUpgrade'
}

export interface MsgSetGasPricesEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.authority.v1.MsgSetGasPrices';
  readonly value: Partial<MsgSetGasPrices>;
}

export function isMsgSetGasPricesEncodeObject (encodeObject: EncodeObject): encodeObject is MsgSetGasPricesEncodeObject {
  return (encodeObject as MsgSetGasPricesEncodeObject).typeUrl === '/em.authority.v1.MsgSetGasPrices'
}
