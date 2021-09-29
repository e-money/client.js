import { AminoMsg, Coin } from '@cosmjs/amino'

/* eslint-disable @typescript-eslint/naming-convention */

export interface AminoMsgAddLimitOrder extends AminoMsg {
  readonly type: 'e-money/MsgAddLimitOrder';
  readonly value: {
    // eslint-disable-next-line camelcase
    readonly owner: string;
    // eslint-disable-next-line camelcase
    readonly client_order_id: string;
    // eslint-disable-next-line camelcase
    readonly time_in_force: string;
    readonly source: Coin;
    readonly destination: Coin;
  };
}

export function isAminoMsgAddLimitOrder (msg: AminoMsg): msg is AminoMsgAddLimitOrder {
  return msg.type === 'e-money/MsgAddLimitOrder'
}

export interface AminoMsgAddMarketOrder extends AminoMsg {
  readonly type: 'e-money/MsgAddMarketOrder';
  readonly value: {
    // eslint-disable-next-line camelcase
    readonly owner: string;
    // eslint-disable-next-line camelcase
    readonly client_order_id: string;
    // eslint-disable-next-line camelcase
    readonly time_in_force: string;
    readonly source: string;
    readonly destination: Coin;
    // eslint-disable-next-line camelcase
    readonly maximum_slippage: string
  };
}

export function isAminoMsgAddMarketOrder (msg: AminoMsg): msg is AminoMsgAddMarketOrder {
  return msg.type === 'e-money/MsgAddMarketOrder'
}

export interface AminoMsgCancelOrder extends AminoMsg {
  readonly type: 'e-money/MsgCancelOrder';
  readonly value: {
    // eslint-disable-next-line camelcase
    readonly owner: string;
    // eslint-disable-next-line camelcase
    readonly client_order_id: string;
    // eslint-disable-next-line camelcase
  };
}

export function isAminoMsgCancelOrder (msg: AminoMsg): msg is AminoMsgCancelOrder {
  return msg.type === 'e-money/MsgCancelOrder'
}

export interface AminoMsgCancelReplaceLimitOrder extends AminoMsg {
  readonly type: 'e-money/MsgCancelReplaceLimitOrder';
  readonly value: {
    // eslint-disable-next-line camelcase
    readonly owner: string;
    // eslint-disable-next-line camelcase
    readonly original_client_order_id: string;
    // eslint-disable-next-line camelcase
    readonly new_client_order_id: string;
    // eslint-disable-next-line camelcase
    readonly time_in_force: string;
    readonly source: Coin;
    readonly destination: Coin;
  };
}

export function isAminoMsgCancelReplaceLimitOrder (msg: AminoMsg): msg is AminoMsgCancelReplaceLimitOrder {
  return msg.type === 'e-money/MsgCancelReplaceLimitOrder'
}
