import { EncodeObject } from '@cosmjs/proto-signing'
import { PubKey } from '../../codecs/cosmos/crypto/ed25519/keys'

export interface PubKeyEncodeObject extends EncodeObject {
  readonly typeUrl: '/cosmos.crypto.ed25519.PubKey';
  readonly value: Partial<PubKey>;
}

export function isPubKeyEncodeObject (encodeObject: EncodeObject): encodeObject is PubKeyEncodeObject {
  return (encodeObject as PubKeyEncodeObject).typeUrl === '/cosmos.crypto.ed25519.PubKey'
}
