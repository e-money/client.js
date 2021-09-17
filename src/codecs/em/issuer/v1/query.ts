/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Issuer } from "../../../em/issuer/v1/issuer";

export const protobufPackage = "em.issuer.v1";

export interface QueryIssuersRequest {}

export interface QueryIssuersResponse {
  issuers: Issuer[];
}

const baseQueryIssuersRequest: object = {};

export const QueryIssuersRequest = {
  encode(
    _: QueryIssuersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIssuersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryIssuersRequest } as QueryIssuersRequest;
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

  fromJSON(_: any): QueryIssuersRequest {
    const message = { ...baseQueryIssuersRequest } as QueryIssuersRequest;
    return message;
  },

  toJSON(_: QueryIssuersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryIssuersRequest>): QueryIssuersRequest {
    const message = { ...baseQueryIssuersRequest } as QueryIssuersRequest;
    return message;
  },
};

const baseQueryIssuersResponse: object = {};

export const QueryIssuersResponse = {
  encode(
    message: QueryIssuersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.issuers) {
      Issuer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryIssuersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryIssuersResponse } as QueryIssuersResponse;
    message.issuers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuers.push(Issuer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIssuersResponse {
    const message = { ...baseQueryIssuersResponse } as QueryIssuersResponse;
    message.issuers = [];
    if (object.issuers !== undefined && object.issuers !== null) {
      for (const e of object.issuers) {
        message.issuers.push(Issuer.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryIssuersResponse): unknown {
    const obj: any = {};
    if (message.issuers) {
      obj.issuers = message.issuers.map((e) =>
        e ? Issuer.toJSON(e) : undefined
      );
    } else {
      obj.issuers = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIssuersResponse>): QueryIssuersResponse {
    const message = { ...baseQueryIssuersResponse } as QueryIssuersResponse;
    message.issuers = [];
    if (object.issuers !== undefined && object.issuers !== null) {
      for (const e of object.issuers) {
        message.issuers.push(Issuer.fromPartial(e));
      }
    }
    return message;
  },
};

export interface Query {
  Issuers(request: QueryIssuersRequest): Promise<QueryIssuersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Issuers = this.Issuers.bind(this);
  }
  Issuers(request: QueryIssuersRequest): Promise<QueryIssuersResponse> {
    const data = QueryIssuersRequest.encode(request).finish();
    const promise = this.rpc.request("em.issuer.v1.Query", "Issuers", data);
    return promise.then((data) =>
      QueryIssuersResponse.decode(new _m0.Reader(data))
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
