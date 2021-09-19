<p align="center">
  <img src="https://raw.githubusercontent.com/e-money/client.js/main/img/e-money-wordmark.svg?token=AEJSY5IW6KVGLLEUHYPW6JDBKDEBG" width=500>
  <br />
  <a href="https://www.npmjs.com/package/@e-money/client.js"><img alt="NPM" src="https://img.shields.io/npm/v/@e-money/client.js"></a>
</p>

# Introduction

This library provides e-Money specific features on top of the [@cosmjs/stargate](https://github.com/cosmos/cosmjs/blob/main/packages/stargate) library.

# Market Module (DEX)

See https://github.com/e-money/em-ledger/tree/master/x/market/spec for a general introduction to the market module.

## Queries

* getInstruments()
* getInstrumentOrders()
* getActiveOrders()

## Orders

* addLimitOrder()
* addMarketOrder()
* cancelOrder()
* cancelReplaceLimitOrder()
* cancelReplaceMarketOrder()

# Example
```
const mnemonic = 'surround miss nominee dream gap cross assault thank captain prosper drop duty group candy wealth weather scale put'
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic)
const [firstAccount] = await wallet.getAccounts()

const rpcEndpoint = 'https://lilmermaid.validator.network'
const client = await SigningEmoneyClient.connectWithSigner(rpcEndpoint, wallet)

const recipient = 'emoney1fd04q4fy30vm4vyx9t4c376zz9gg9wql04gx3g'
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