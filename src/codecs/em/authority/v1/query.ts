/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Plan } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "em.authority.v1";

export interface QueryGasPricesRequest {}

export interface QueryGasPricesResponse {
  minGasPrices: DecCoin[];
}

export interface QueryUpgradePlanRequest {}

export interface QueryUpgradePlanResponse {
  plan?: Plan;
}

const baseQueryGasPricesRequest: object = {};

export const QueryGasPricesRequest = {
  encode(
    _: QueryGasPricesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGasPricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGasPricesRequest } as QueryGasPricesRequest;
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

  fromJSON(_: any): QueryGasPricesRequest {
    const message = { ...baseQueryGasPricesRequest } as QueryGasPricesRequest;
    return message;
  },

  toJSON(_: QueryGasPricesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryGasPricesRequest>): QueryGasPricesRequest {
    const message = { ...baseQueryGasPricesRequest } as QueryGasPricesRequest;
    return message;
  },
};

const baseQueryGasPricesResponse: object = {};

export const QueryGasPricesResponse = {
  encode(
    message: QueryGasPricesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.minGasPrices) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGasPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGasPricesResponse } as QueryGasPricesResponse;
    message.minGasPrices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minGasPrices.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGasPricesResponse {
    const message = { ...baseQueryGasPricesResponse } as QueryGasPricesResponse;
    message.minGasPrices = [];
    if (object.minGasPrices !== undefined && object.minGasPrices !== null) {
      for (const e of object.minGasPrices) {
        message.minGasPrices.push(DecCoin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryGasPricesResponse): unknown {
    const obj: any = {};
    if (message.minGasPrices) {
      obj.minGasPrices = message.minGasPrices.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.minGasPrices = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGasPricesResponse>
  ): QueryGasPricesResponse {
    const message = { ...baseQueryGasPricesResponse } as QueryGasPricesResponse;
    message.minGasPrices = [];
    if (object.minGasPrices !== undefined && object.minGasPrices !== null) {
      for (const e of object.minGasPrices) {
        message.minGasPrices.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryUpgradePlanRequest: object = {};

export const QueryUpgradePlanRequest = {
  encode(
    _: QueryUpgradePlanRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUpgradePlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUpgradePlanRequest,
    } as QueryUpgradePlanRequest;
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

  fromJSON(_: any): QueryUpgradePlanRequest {
    const message = {
      ...baseQueryUpgradePlanRequest,
    } as QueryUpgradePlanRequest;
    return message;
  },

  toJSON(_: QueryUpgradePlanRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryUpgradePlanRequest>
  ): QueryUpgradePlanRequest {
    const message = {
      ...baseQueryUpgradePlanRequest,
    } as QueryUpgradePlanRequest;
    return message;
  },
};

const baseQueryUpgradePlanResponse: object = {};

export const QueryUpgradePlanResponse = {
  encode(
    message: QueryUpgradePlanResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryUpgradePlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryUpgradePlanResponse,
    } as QueryUpgradePlanResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUpgradePlanResponse {
    const message = {
      ...baseQueryUpgradePlanResponse,
    } as QueryUpgradePlanResponse;
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromJSON(object.plan);
    } else {
      message.plan = undefined;
    }
    return message;
  },

  toJSON(message: QueryUpgradePlanResponse): unknown {
    const obj: any = {};
    message.plan !== undefined &&
      (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryUpgradePlanResponse>
  ): QueryUpgradePlanResponse {
    const message = {
      ...baseQueryUpgradePlanResponse,
    } as QueryUpgradePlanResponse;
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromPartial(object.plan);
    } else {
      message.plan = undefined;
    }
    return message;
  },
};

export interface Query {
  GasPrices(request: QueryGasPricesRequest): Promise<QueryGasPricesResponse>;
  UpgradePlan(
    request: QueryUpgradePlanRequest
  ): Promise<QueryUpgradePlanResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GasPrices = this.GasPrices.bind(this);
    this.UpgradePlan = this.UpgradePlan.bind(this);
  }
  GasPrices(request: QueryGasPricesRequest): Promise<QueryGasPricesResponse> {
    const data = QueryGasPricesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "em.authority.v1.Query",
      "GasPrices",
      data
    );
    return promise.then((data) =>
      QueryGasPricesResponse.decode(new _m0.Reader(data))
    );
  }

  UpgradePlan(
    request: QueryUpgradePlanRequest
  ): Promise<QueryUpgradePlanResponse> {
    const data = QueryUpgradePlanRequest.encode(request).finish();
    const promise = this.rpc.request(
      "em.authority.v1.Query",
      "UpgradePlan",
      data
    );
    return promise.then((data) =>
      QueryUpgradePlanResponse.decode(new _m0.Reader(data))
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
