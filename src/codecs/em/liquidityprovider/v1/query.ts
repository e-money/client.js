/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { LiquidityProviderAccount } from "../../../em/liquidityprovider/v1/liquidityprovider";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "em.liquidityprovider.v1";

export interface QueryListRequest {}

export interface QueryListResponse {
  liquidityProviders: LiquidityProviderAccount[];
}

export interface QueryMintableRequest {
  /** address defines the liquidity provider address to query mintable. */
  address: string;
}

export interface QueryMintableResponse {
  mintable: Coin[];
}

const baseQueryListRequest: object = {};

export const QueryListRequest = {
  encode(
    _: QueryListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryListRequest } as QueryListRequest;
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

  fromJSON(_: any): QueryListRequest {
    const message = { ...baseQueryListRequest } as QueryListRequest;
    return message;
  },

  toJSON(_: QueryListRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryListRequest>): QueryListRequest {
    const message = { ...baseQueryListRequest } as QueryListRequest;
    return message;
  },
};

const baseQueryListResponse: object = {};

export const QueryListResponse = {
  encode(
    message: QueryListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.liquidityProviders) {
      LiquidityProviderAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryListResponse } as QueryListResponse;
    message.liquidityProviders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidityProviders.push(
            LiquidityProviderAccount.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryListResponse {
    const message = { ...baseQueryListResponse } as QueryListResponse;
    message.liquidityProviders = [];
    if (
      object.liquidityProviders !== undefined &&
      object.liquidityProviders !== null
    ) {
      for (const e of object.liquidityProviders) {
        message.liquidityProviders.push(LiquidityProviderAccount.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryListResponse): unknown {
    const obj: any = {};
    if (message.liquidityProviders) {
      obj.liquidityProviders = message.liquidityProviders.map((e) =>
        e ? LiquidityProviderAccount.toJSON(e) : undefined
      );
    } else {
      obj.liquidityProviders = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryListResponse>): QueryListResponse {
    const message = { ...baseQueryListResponse } as QueryListResponse;
    message.liquidityProviders = [];
    if (
      object.liquidityProviders !== undefined &&
      object.liquidityProviders !== null
    ) {
      for (const e of object.liquidityProviders) {
        message.liquidityProviders.push(
          LiquidityProviderAccount.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseQueryMintableRequest: object = { address: "" };

export const QueryMintableRequest = {
  encode(
    message: QueryMintableRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMintableRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryMintableRequest } as QueryMintableRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMintableRequest {
    const message = { ...baseQueryMintableRequest } as QueryMintableRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryMintableRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryMintableRequest>): QueryMintableRequest {
    const message = { ...baseQueryMintableRequest } as QueryMintableRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryMintableResponse: object = {};

export const QueryMintableResponse = {
  encode(
    message: QueryMintableResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.mintable) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMintableResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryMintableResponse } as QueryMintableResponse;
    message.mintable = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintable.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMintableResponse {
    const message = { ...baseQueryMintableResponse } as QueryMintableResponse;
    message.mintable = [];
    if (object.mintable !== undefined && object.mintable !== null) {
      for (const e of object.mintable) {
        message.mintable.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryMintableResponse): unknown {
    const obj: any = {};
    if (message.mintable) {
      obj.mintable = message.mintable.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.mintable = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMintableResponse>
  ): QueryMintableResponse {
    const message = { ...baseQueryMintableResponse } as QueryMintableResponse;
    message.mintable = [];
    if (object.mintable !== undefined && object.mintable !== null) {
      for (const e of object.mintable) {
        message.mintable.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

export interface Query {
  List(request: QueryListRequest): Promise<QueryListResponse>;
  Mintable(request: QueryMintableRequest): Promise<QueryMintableResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.List = this.List.bind(this);
    this.Mintable = this.Mintable.bind(this);
  }
  List(request: QueryListRequest): Promise<QueryListResponse> {
    const data = QueryListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "em.liquidityprovider.v1.Query",
      "List",
      data
    );
    return promise.then((data) =>
      QueryListResponse.decode(new _m0.Reader(data))
    );
  }

  Mintable(request: QueryMintableRequest): Promise<QueryMintableResponse> {
    const data = QueryMintableRequest.encode(request).finish();
    const promise = this.rpc.request(
      "em.liquidityprovider.v1.Query",
      "Mintable",
      data
    );
    return promise.then((data) =>
      QueryMintableResponse.decode(new _m0.Reader(data))
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
