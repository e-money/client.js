import { MsgDecreaseMintable, MsgIncreaseMintable, MsgRevokeLiquidityProvider, MsgSetInflation } from '../../codecs/em/issuer/v1/tx'
import { EncodeObject } from '@cosmjs/proto-signing'

export interface MsgIncreaseMintableEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.issuer.v1.MsgIncreaseMintable';
  readonly value: Partial<MsgIncreaseMintable>;
}

export function isMsgIncreaseMintableEncodeObject (encodeObject: EncodeObject): encodeObject is MsgIncreaseMintableEncodeObject {
  return (encodeObject as MsgIncreaseMintableEncodeObject).typeUrl === '/em.issuer.v1.MsgIncreaseMintable'
}

export interface MsgDecreaseMintableEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.issuer.v1.MsgDecreaseMintable';
  readonly value: Partial<MsgDecreaseMintable>;
}

export function isMsgDecreaseMintableEncodeObject (encodeObject: EncodeObject): encodeObject is MsgDecreaseMintableEncodeObject {
  return (encodeObject as MsgDecreaseMintableEncodeObject).typeUrl === '/em.issuer.v1.MsgDecreaseMintable'
}

export interface MsgRevokeLiquidityProviderEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.issuer.v1.MsgRevokeLiquidityProvider';
  readonly value: Partial<MsgRevokeLiquidityProvider>;
}

export function isMsgRevokeLiquidityProviderEncodeObject (encodeObject: EncodeObject): encodeObject is MsgRevokeLiquidityProviderEncodeObject {
  return (encodeObject as MsgRevokeLiquidityProviderEncodeObject).typeUrl === '/em.issuer.v1.MsgRevokeLiquidityProvider'
}

export interface MsgSetInflationEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.issuer.v1.MsgSetInflation';
  readonly value: Partial<MsgSetInflation>;
}

export function isMsgSetInflationEncodeObject (encodeObject: EncodeObject): encodeObject is MsgSetInflationEncodeObject {
  return (encodeObject as MsgSetInflationEncodeObject).typeUrl === '/em.issuer.v1.MsgSetInflation'
}
