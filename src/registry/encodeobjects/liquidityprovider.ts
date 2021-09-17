import { MsgBurnTokens, MsgMintTokens } from '../../codecs/em/liquidityprovider/v1/tx'
import { EncodeObject } from '@cosmjs/proto-signing'

export interface MsgMintTokensEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.liquidityprovider.v1.MsgMintTokens';
  readonly value: Partial<MsgMintTokens>;
}

export function isMsgMintTokensEncodeObject (encodeObject: EncodeObject): encodeObject is MsgMintTokensEncodeObject {
  return (encodeObject as MsgMintTokensEncodeObject).typeUrl === '/em.liquidityprovider.v1.MsgMintTokens'
}

export interface MsgBurnTokensEncodeObject extends EncodeObject {
  readonly typeUrl: '/em.liquidityprovider.v1.MsgBurnTokens';
  readonly value: Partial<MsgBurnTokens>;
}

export function isMsgBurnTokensEncodeObject (encodeObject: EncodeObject): encodeObject is MsgBurnTokensEncodeObject {
  return (encodeObject as MsgBurnTokensEncodeObject).typeUrl === '/em.liquidityprovider.v1.MsgBurnTokens'
}
