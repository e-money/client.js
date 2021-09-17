/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "em.liquidityprovider.v1";

export interface MsgMintTokens {
  liquidityProvider: string;
  amount: Coin[];
}

export interface MsgMintTokensResponse {}

export interface MsgBurnTokens {
  liquidityProvider: string;
  amount: Coin[];
}

export interface MsgBurnTokensResponse {}

const baseMsgMintTokens: object = { liquidityProvider: "" };

export const MsgMintTokens = {
  encode(
    message: MsgMintTokens,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.liquidityProvider !== "") {
      writer.uint32(10).string(message.liquidityProvider);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintTokens } as MsgMintTokens;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityProvider = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintTokens {
    const message = { ...baseMsgMintTokens } as MsgMintTokens;
    message.amount = [];
    if (
      object.liquidityProvider !== undefined &&
      object.liquidityProvider !== null
    ) {
      message.liquidityProvider = String(object.liquidityProvider);
    } else {
      message.liquidityProvider = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgMintTokens): unknown {
    const obj: any = {};
    message.liquidityProvider !== undefined &&
      (obj.liquidityProvider = message.liquidityProvider);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintTokens>): MsgMintTokens {
    const message = { ...baseMsgMintTokens } as MsgMintTokens;
    message.amount = [];
    if (
      object.liquidityProvider !== undefined &&
      object.liquidityProvider !== null
    ) {
      message.liquidityProvider = object.liquidityProvider;
    } else {
      message.liquidityProvider = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgMintTokensResponse: object = {};

export const MsgMintTokensResponse = {
  encode(
    _: MsgMintTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgMintTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintTokensResponse } as MsgMintTokensResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgMintTokensResponse {
    const message = { ...baseMsgMintTokensResponse } as MsgMintTokensResponse;
    return message;
  },

  toJSON(_: MsgMintTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMintTokensResponse>): MsgMintTokensResponse {
    const message = { ...baseMsgMintTokensResponse } as MsgMintTokensResponse;
    return message;
  },
};

const baseMsgBurnTokens: object = { liquidityProvider: "" };

export const MsgBurnTokens = {
  encode(
    message: MsgBurnTokens,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.liquidityProvider !== "") {
      writer.uint32(10).string(message.liquidityProvider);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnTokens } as MsgBurnTokens;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityProvider = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnTokens {
    const message = { ...baseMsgBurnTokens } as MsgBurnTokens;
    message.amount = [];
    if (
      object.liquidityProvider !== undefined &&
      object.liquidityProvider !== null
    ) {
      message.liquidityProvider = String(object.liquidityProvider);
    } else {
      message.liquidityProvider = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgBurnTokens): unknown {
    const obj: any = {};
    message.liquidityProvider !== undefined &&
      (obj.liquidityProvider = message.liquidityProvider);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnTokens>): MsgBurnTokens {
    const message = { ...baseMsgBurnTokens } as MsgBurnTokens;
    message.amount = [];
    if (
      object.liquidityProvider !== undefined &&
      object.liquidityProvider !== null
    ) {
      message.liquidityProvider = object.liquidityProvider;
    } else {
      message.liquidityProvider = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgBurnTokensResponse: object = {};

export const MsgBurnTokensResponse = {
  encode(
    _: MsgBurnTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgBurnTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnTokensResponse } as MsgBurnTokensResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBurnTokensResponse {
    const message = { ...baseMsgBurnTokensResponse } as MsgBurnTokensResponse;
    return message;
  },

  toJSON(_: MsgBurnTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBurnTokensResponse>): MsgBurnTokensResponse {
    const message = { ...baseMsgBurnTokensResponse } as MsgBurnTokensResponse;
    return message;
  },
};

export interface Msg {
  MintTokens(request: MsgMintTokens): Promise<MsgMintTokensResponse>;
  BurnTokens(request: MsgBurnTokens): Promise<MsgBurnTokensResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MintTokens = this.MintTokens.bind(this);
    this.BurnTokens = this.BurnTokens.bind(this);
  }
  MintTokens(request: MsgMintTokens): Promise<MsgMintTokensResponse> {
    const data = MsgMintTokens.encode(request).finish();
    const promise = this.rpc.request(
      "em.liquidityprovider.v1.Msg",
      "MintTokens",
      data
    );
    return promise.then((data) =>
      MsgMintTokensResponse.decode(new _m0.Reader(data))
    );
  }

  BurnTokens(request: MsgBurnTokens): Promise<MsgBurnTokensResponse> {
    const data = MsgBurnTokens.encode(request).finish();
    const promise = this.rpc.request(
      "em.liquidityprovider.v1.Msg",
      "BurnTokens",
      data
    );
    return promise.then((data) =>
      MsgBurnTokensResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
