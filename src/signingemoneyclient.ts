import { OfflineSigner } from '@cosmjs/proto-signing'
import { SigningStargateClient } from '@cosmjs/stargate'
import { createRegistry } from './registry'

export class SigningEmoneyClient extends SigningStargateClient {
  public static async connectWithSigner (endpoint: string, signer: OfflineSigner): Promise<SigningEmoneyClient> {
    return SigningStargateClient.connectWithSigner(endpoint, signer, {
      registry: createRegistry(),
      prefix: 'emoney'
    })
  }
}
