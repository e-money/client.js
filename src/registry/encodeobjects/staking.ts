import { Validator } from '../../codecs/cosmos/staking/v1beta1/staking'
import { EncodeObject } from '@cosmjs/proto-signing'

export interface ValidatorEncodeObject extends EncodeObject {
  readonly typeUrl: '/cosmos.crypto.ed25519.PubKey';
  readonly value: Partial<Validator>;
}

export function isValidatorEncodeObject (encodeObject: EncodeObject): encodeObject is ValidatorEncodeObject {
  return (encodeObject as ValidatorEncodeObject).typeUrl === '/cosmos.crypto.ed25519.PubKey'
}
