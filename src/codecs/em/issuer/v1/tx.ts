/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "em.issuer.v1";

export interface MsgIncreaseMintable {
  issuer: string;
  liquidityProvider: string;
  amount: Coin[];
}

export interface MsgIncreaseMintableResponse {}

export interface MsgDecreaseMintable {
  issuer: string;
  liquidityProvider: string;
  amount: Coin[];
}

export interface MsgDecreaseMintableResponse {}

export interface MsgRevokeLiquidityProvider {
  issuer: string;
  liquidityProvider: string;
}

export interface MsgRevokeLiquidityProviderResponse {}

export interface MsgSetInflation {
  issuer: string;
  denom: string;
  inflationRate: string;
}

export interface MsgSetInflationResponse {}

const baseMsgIncreaseMintable: object = { issuer: "", liquidityProvider: "" };

export const MsgIncreaseMintable = {
  encode(
    message: MsgIncreaseMintable,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.liquidityProvider !== "") {
      writer.uint32(18).string(message.liquidityProvider);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIncreaseMintable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgIncreaseMintable } as MsgIncreaseMintable;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.liquidityProvider = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIncreaseMintable {
    const message = { ...baseMsgIncreaseMintable } as MsgIncreaseMintable;
    message.amount = [];
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
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

  toJSON(message: MsgIncreaseMintable): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.liquidityProvider !== undefined &&
      (obj.liquidityProvider = message.liquidityProvider);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIncreaseMintable>): MsgIncreaseMintable {
    const message = { ...baseMsgIncreaseMintable } as MsgIncreaseMintable;
    message.amount = [];
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
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

const baseMsgIncreaseMintableResponse: object = {};

export const MsgIncreaseMintableResponse = {
  encode(
    _: MsgIncreaseMintableResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgIncreaseMintableResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgIncreaseMintableResponse,
    } as MsgIncreaseMintableResponse;
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

  fromJSON(_: any): MsgIncreaseMintableResponse {
    const message = {
      ...baseMsgIncreaseMintableResponse,
    } as MsgIncreaseMintableResponse;
    return message;
  },

  toJSON(_: MsgIncreaseMintableResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgIncreaseMintableResponse>
  ): MsgIncreaseMintableResponse {
    const message = {
      ...baseMsgIncreaseMintableResponse,
    } as MsgIncreaseMintableResponse;
    return message;
  },
};

const baseMsgDecreaseMintable: object = { issuer: "", liquidityProvider: "" };

export const MsgDecreaseMintable = {
  encode(
    message: MsgDecreaseMintable,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.liquidityProvider !== "") {
      writer.uint32(18).string(message.liquidityProvider);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDecreaseMintable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDecreaseMintable } as MsgDecreaseMintable;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.liquidityProvider = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDecreaseMintable {
    const message = { ...baseMsgDecreaseMintable } as MsgDecreaseMintable;
    message.amount = [];
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
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

  toJSON(message: MsgDecreaseMintable): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.liquidityProvider !== undefined &&
      (obj.liquidityProvider = message.liquidityProvider);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDecreaseMintable>): MsgDecreaseMintable {
    const message = { ...baseMsgDecreaseMintable } as MsgDecreaseMintable;
    message.amount = [];
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
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

const baseMsgDecreaseMintableResponse: object = {};

export const MsgDecreaseMintableResponse = {
  encode(
    _: MsgDecreaseMintableResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDecreaseMintableResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDecreaseMintableResponse,
    } as MsgDecreaseMintableResponse;
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

  fromJSON(_: any): MsgDecreaseMintableResponse {
    const message = {
      ...baseMsgDecreaseMintableResponse,
    } as MsgDecreaseMintableResponse;
    return message;
  },

  toJSON(_: MsgDecreaseMintableResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDecreaseMintableResponse>
  ): MsgDecreaseMintableResponse {
    const message = {
      ...baseMsgDecreaseMintableResponse,
    } as MsgDecreaseMintableResponse;
    return message;
  },
};

const baseMsgRevokeLiquidityProvider: object = {
  issuer: "",
  liquidityProvider: "",
};

export const MsgRevokeLiquidityProvider = {
  encode(
    message: MsgRevokeLiquidityProvider,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.liquidityProvider !== "") {
      writer.uint32(18).string(message.liquidityProvider);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRevokeLiquidityProvider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRevokeLiquidityProvider,
    } as MsgRevokeLiquidityProvider;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.liquidityProvider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeLiquidityProvider {
    const message = {
      ...baseMsgRevokeLiquidityProvider,
    } as MsgRevokeLiquidityProvider;
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (
      object.liquidityProvider !== undefined &&
      object.liquidityProvider !== null
    ) {
      message.liquidityProvider = String(object.liquidityProvider);
    } else {
      message.liquidityProvider = "";
    }
    return message;
  },

  toJSON(message: MsgRevokeLiquidityProvider): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.liquidityProvider !== undefined &&
      (obj.liquidityProvider = message.liquidityProvider);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRevokeLiquidityProvider>
  ): MsgRevokeLiquidityProvider {
    const message = {
      ...baseMsgRevokeLiquidityProvider,
    } as MsgRevokeLiquidityProvider;
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (
      object.liquidityProvider !== undefined &&
      object.liquidityProvider !== null
    ) {
      message.liquidityProvider = object.liquidityProvider;
    } else {
      message.liquidityProvider = "";
    }
    return message;
  },
};

const baseMsgRevokeLiquidityProviderResponse: object = {};

export const MsgRevokeLiquidityProviderResponse = {
  encode(
    _: MsgRevokeLiquidityProviderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRevokeLiquidityProviderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRevokeLiquidityProviderResponse,
    } as MsgRevokeLiquidityProviderResponse;
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

  fromJSON(_: any): MsgRevokeLiquidityProviderResponse {
    const message = {
      ...baseMsgRevokeLiquidityProviderResponse,
    } as MsgRevokeLiquidityProviderResponse;
    return message;
  },

  toJSON(_: MsgRevokeLiquidityProviderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRevokeLiquidityProviderResponse>
  ): MsgRevokeLiquidityProviderResponse {
    const message = {
      ...baseMsgRevokeLiquidityProviderResponse,
    } as MsgRevokeLiquidityProviderResponse;
    return message;
  },
};

const baseMsgSetInflation: object = {
  issuer: "",
  denom: "",
  inflationRate: "",
};

export const MsgSetInflation = {
  encode(
    message: MsgSetInflation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.issuer !== "") {
      writer.uint32(10).string(message.issuer);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.inflationRate !== "") {
      writer.uint32(26).string(message.inflationRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetInflation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetInflation } as MsgSetInflation;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuer = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.inflationRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetInflation {
    const message = { ...baseMsgSetInflation } as MsgSetInflation;
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.inflationRate !== undefined && object.inflationRate !== null) {
      message.inflationRate = String(object.inflationRate);
    } else {
      message.inflationRate = "";
    }
    return message;
  },

  toJSON(message: MsgSetInflation): unknown {
    const obj: any = {};
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.denom !== undefined && (obj.denom = message.denom);
    message.inflationRate !== undefined &&
      (obj.inflationRate = message.inflationRate);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetInflation>): MsgSetInflation {
    const message = { ...baseMsgSetInflation } as MsgSetInflation;
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.inflationRate !== undefined && object.inflationRate !== null) {
      message.inflationRate = object.inflationRate;
    } else {
      message.inflationRate = "";
    }
    return message;
  },
};

const baseMsgSetInflationResponse: object = {};

export const MsgSetInflationResponse = {
  encode(
    _: MsgSetInflationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetInflationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetInflationResponse,
    } as MsgSetInflationResponse;
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

  fromJSON(_: any): MsgSetInflationResponse {
    const message = {
      ...baseMsgSetInflationResponse,
    } as MsgSetInflationResponse;
    return message;
  },

  toJSON(_: MsgSetInflationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetInflationResponse>
  ): MsgSetInflationResponse {
    const message = {
      ...baseMsgSetInflationResponse,
    } as MsgSetInflationResponse;
    return message;
  },
};

export interface Msg {
  IncreaseMintable(
    request: MsgIncreaseMintable
  ): Promise<MsgIncreaseMintableResponse>;
  DecreaseMintable(
    request: MsgDecreaseMintable
  ): Promise<MsgDecreaseMintableResponse>;
  RevokeLiquidityProvider(
    request: MsgRevokeLiquidityProvider
  ): Promise<MsgRevokeLiquidityProviderResponse>;
  SetInflation(request: MsgSetInflation): Promise<MsgSetInflationResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.IncreaseMintable = this.IncreaseMintable.bind(this);
    this.DecreaseMintable = this.DecreaseMintable.bind(this);
    this.RevokeLiquidityProvider = this.RevokeLiquidityProvider.bind(this);
    this.SetInflation = this.SetInflation.bind(this);
  }
  IncreaseMintable(
    request: MsgIncreaseMintable
  ): Promise<MsgIncreaseMintableResponse> {
    const data = MsgIncreaseMintable.encode(request).finish();
    const promise = this.rpc.request(
      "em.issuer.v1.Msg",
      "IncreaseMintable",
      data
    );
    return promise.then((data) =>
      MsgIncreaseMintableResponse.decode(new _m0.Reader(data))
    );
  }

  DecreaseMintable(
    request: MsgDecreaseMintable
  ): Promise<MsgDecreaseMintableResponse> {
    const data = MsgDecreaseMintable.encode(request).finish();
    const promise = this.rpc.request(
      "em.issuer.v1.Msg",
      "DecreaseMintable",
      data
    );
    return promise.then((data) =>
      MsgDecreaseMintableResponse.decode(new _m0.Reader(data))
    );
  }

  RevokeLiquidityProvider(
    request: MsgRevokeLiquidityProvider
  ): Promise<MsgRevokeLiquidityProviderResponse> {
    const data = MsgRevokeLiquidityProvider.encode(request).finish();
    const promise = this.rpc.request(
      "em.issuer.v1.Msg",
      "RevokeLiquidityProvider",
      data
    );
    return promise.then((data) =>
      MsgRevokeLiquidityProviderResponse.decode(new _m0.Reader(data))
    );
  }

  SetInflation(request: MsgSetInflation): Promise<MsgSetInflationResponse> {
    const data = MsgSetInflation.encode(request).finish();
    const promise = this.rpc.request("em.issuer.v1.Msg", "SetInflation", data);
    return promise.then((data) =>
      MsgSetInflationResponse.decode(new _m0.Reader(data))
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
