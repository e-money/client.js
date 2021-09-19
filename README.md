![e-Money wordmark](docs/e-money-wordmark.svg)

## Introduction

This library provides e-Money specific types for use with [@cosmjs/stargate](https://github.com/cosmos/cosmjs/blob/main/packages/stargate).

## Market Module (DEX)

See https://github.com/e-money/em-ledger/tree/master/x/market/spec for a general introduction to the market module.

## Example
```
const mnemonic = 'surround miss nominee dream gap cross assault thank captain prosper drop duty group candy wealth weather scale put'
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic)
const [firstAccount] = await wallet.getAccounts()

const rpcEndpoint = 'https://lilmermaid.validator.network'
const client = await SigningEmoneyClient.connectWithSigner(rpcEndpoint, wallet)

const recipient = 'cosmos1xv9tklw7d82sezh9haa573wufgy59vmwe6xxe5'
const amount = {
  denom: 'eeur',
  amount: '123'
}

const fee = {
  amount: [
    {
      denom: 'eeur',
      amount: '2000'
    }
  ],
  gas: '180000'
}

const result = await client.sendTokens(firstAccount.address, recipient, [amount], fee, 'Have fun with your new coins')
assertIsBroadcastTxSuccess(result)
```