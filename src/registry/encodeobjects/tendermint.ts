import { EncodeObject } from '@cosmjs/proto-signing'
import { PublicKey } from '../../codecs/tendermint/crypto/keys'

export interface PublicKeyEncodeObject extends EncodeObject {
  readonly typeUrl: '/cosmos.crypto.PubKey';
  readonly value: Partial<PublicKey>;
}

export function isPublicKeyEncodeObject (encodeObject: EncodeObject): encodeObject is PublicKeyEncodeObject {
  return (encodeObject as PublicKeyEncodeObject).typeUrl === '/cosmos.crypto.PubKey'
}
