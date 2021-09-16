/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "em.queries.v1";

export interface QueryCirculatingRequest {}

export interface QueryCirculatingResponse {
  total: Coin[];
}

export interface QuerySpendableRequest {
  address: string;
}

export interface QuerySpendableResponse {
  balance: Coin[];
}

const baseQueryCirculatingRequest: object = {};

export const QueryCirculatingRequest = {
  encode(
    _: QueryCirculatingRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCirculatingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCirculatingRequest,
    } as QueryCirculatingRequest;
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

  fromJSON(_: any): QueryCirculatingRequest {
    const message = {
      ...baseQueryCirculatingRequest,
    } as QueryCirculatingRequest;
    return message;
  },

  toJSON(_: QueryCirculatingRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryCirculatingRequest>
  ): QueryCirculatingRequest {
    const message = {
      ...baseQueryCirculatingRequest,
    } as QueryCirculatingRequest;
    return message;
  },
};

const baseQueryCirculatingResponse: object = {};

export const QueryCirculatingResponse = {
  encode(
    message: QueryCirculatingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.total) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCirculatingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCirculatingResponse,
    } as QueryCirculatingResponse;
    message.total = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCirculatingResponse {
    const message = {
      ...baseQueryCirculatingResponse,
    } as QueryCirculatingResponse;
    message.total = [];
    if (object.total !== undefined && object.total !== null) {
      for (const e of object.total) {
        message.total.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryCirculatingResponse): unknown {
    const obj: any = {};
    if (message.total) {
      obj.total = message.total.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.total = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCirculatingResponse>
  ): QueryCirculatingResponse {
    const message = {
      ...baseQueryCirculatingResponse,
    } as QueryCirculatingResponse;
    message.total = [];
    if (object.total !== undefined && object.total !== null) {
      for (const e of object.total) {
        message.total.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQuerySpendableRequest: object = { address: "" };

export const QuerySpendableRequest = {
  encode(
    message: QuerySpendableRequest,
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
  ): QuerySpendableRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySpendableRequest } as QuerySpendableRequest;
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

  fromJSON(object: any): QuerySpendableRequest {
    const message = { ...baseQuerySpendableRequest } as QuerySpendableRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QuerySpendableRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySpendableRequest>
  ): QuerySpendableRequest {
    const message = { ...baseQuerySpendableRequest } as QuerySpendableRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQuerySpendableResponse: object = {};

export const QuerySpendableResponse = {
  encode(
    message: QuerySpendableResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySpendableResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQuerySpendableResponse } as QuerySpendableResponse;
    message.balance = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySpendableResponse {
    const message = { ...baseQuerySpendableResponse } as QuerySpendableResponse;
    message.balance = [];
    if (object.balance !== undefined && object.balance !== null) {
      for (const e of object.balance) {
        message.balance.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QuerySpendableResponse): unknown {
    const obj: any = {};
    if (message.balance) {
      obj.balance = message.balance.map((e) =>
        e ? Coin.toJSON(e) : undefined
      );
    } else {
      obj.balance = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySpendableResponse>
  ): QuerySpendableResponse {
    const message = { ...baseQuerySpendableResponse } as QuerySpendableResponse;
    message.balance = [];
    if (object.balance !== undefined && object.balance !== null) {
      for (const e of object.balance) {
        message.balance.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

export interface Query {
  Circulating(
    request: QueryCirculatingRequest
  ): Promise<QueryCirculatingResponse>;
  Spendable(request: QuerySpendableRequest): Promise<QuerySpendableResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Circulating = this.Circulating.bind(this);
    this.Spendable = this.Spendable.bind(this);
  }
  Circulating(
    request: QueryCirculatingRequest
  ): Promise<QueryCirculatingResponse> {
    const data = QueryCirculatingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "em.queries.v1.Query",
      "Circulating",
      data
    );
    return promise.then((data) =>
      QueryCirculatingResponse.decode(new _m0.Reader(data))
    );
  }

  Spendable(request: QuerySpendableRequest): Promise<QuerySpendableResponse> {
    const data = QuerySpendableRequest.encode(request).finish();
    const promise = this.rpc.request("em.queries.v1.Query", "Spendable", data);
    return promise.then((data) =>
      QuerySpendableResponse.decode(new _m0.Reader(data))
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
