/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "em.buyback.v1";

export interface QueryBalanceRequest {}

export interface QueryBalanceResponse {
  balance: Coin[];
}

export interface QueryBuybackTimeRequest {}

export interface QueryBuybackTimeResponse {
  lastRun?: Date;
  nextRun?: Date;
}

const baseQueryBalanceRequest: object = {};

export const QueryBalanceRequest = {
  encode(
    _: QueryBalanceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
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

  fromJSON(_: any): QueryBalanceRequest {
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    return message;
  },

  toJSON(_: QueryBalanceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    return message;
  },
};

const baseQueryBalanceResponse: object = {};

export const QueryBalanceResponse = {
  encode(
    message: QueryBalanceResponse,
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
  ): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
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

  fromJSON(object: any): QueryBalanceResponse {
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    message.balance = [];
    if (object.balance !== undefined && object.balance !== null) {
      for (const e of object.balance) {
        message.balance.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryBalanceResponse): unknown {
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

  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    message.balance = [];
    if (object.balance !== undefined && object.balance !== null) {
      for (const e of object.balance) {
        message.balance.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryBuybackTimeRequest: object = {};

export const QueryBuybackTimeRequest = {
  encode(
    _: QueryBuybackTimeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBuybackTimeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBuybackTimeRequest,
    } as QueryBuybackTimeRequest;
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

  fromJSON(_: any): QueryBuybackTimeRequest {
    const message = {
      ...baseQueryBuybackTimeRequest,
    } as QueryBuybackTimeRequest;
    return message;
  },

  toJSON(_: QueryBuybackTimeRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryBuybackTimeRequest>
  ): QueryBuybackTimeRequest {
    const message = {
      ...baseQueryBuybackTimeRequest,
    } as QueryBuybackTimeRequest;
    return message;
  },
};

const baseQueryBuybackTimeResponse: object = {};

export const QueryBuybackTimeResponse = {
  encode(
    message: QueryBuybackTimeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lastRun !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastRun),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.nextRun !== undefined) {
      Timestamp.encode(
        toTimestamp(message.nextRun),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryBuybackTimeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBuybackTimeResponse,
    } as QueryBuybackTimeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastRun = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.nextRun = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBuybackTimeResponse {
    const message = {
      ...baseQueryBuybackTimeResponse,
    } as QueryBuybackTimeResponse;
    if (object.lastRun !== undefined && object.lastRun !== null) {
      message.lastRun = fromJsonTimestamp(object.lastRun);
    } else {
      message.lastRun = undefined;
    }
    if (object.nextRun !== undefined && object.nextRun !== null) {
      message.nextRun = fromJsonTimestamp(object.nextRun);
    } else {
      message.nextRun = undefined;
    }
    return message;
  },

  toJSON(message: QueryBuybackTimeResponse): unknown {
    const obj: any = {};
    message.lastRun !== undefined &&
      (obj.lastRun = message.lastRun.toISOString());
    message.nextRun !== undefined &&
      (obj.nextRun = message.nextRun.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBuybackTimeResponse>
  ): QueryBuybackTimeResponse {
    const message = {
      ...baseQueryBuybackTimeResponse,
    } as QueryBuybackTimeResponse;
    if (object.lastRun !== undefined && object.lastRun !== null) {
      message.lastRun = object.lastRun;
    } else {
      message.lastRun = undefined;
    }
    if (object.nextRun !== undefined && object.nextRun !== null) {
      message.nextRun = object.nextRun;
    } else {
      message.nextRun = undefined;
    }
    return message;
  },
};

export interface Query {
  /** Query for the current buyback balance */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Query for buyback time periods */
  BuybackTime(
    request: QueryBuybackTimeRequest
  ): Promise<QueryBuybackTimeResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Balance = this.Balance.bind(this);
    this.BuybackTime = this.BuybackTime.bind(this);
  }
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("em.buyback.v1.Query", "Balance", data);
    return promise.then((data) =>
      QueryBalanceResponse.decode(new _m0.Reader(data))
    );
  }

  BuybackTime(
    request: QueryBuybackTimeRequest
  ): Promise<QueryBuybackTimeResponse> {
    const data = QueryBuybackTimeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "em.buyback.v1.Query",
      "BuybackTime",
      data
    );
    return promise.then((data) =>
      QueryBuybackTimeResponse.decode(new _m0.Reader(data))
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
