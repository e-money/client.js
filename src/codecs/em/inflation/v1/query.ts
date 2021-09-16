/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { InflationState } from "../../../em/inflation/v1/inflation";

export const protobufPackage = "em.inflation.v1";

export interface QueryInflationRequest {}

export interface QueryInflationResponse {
  state?: InflationState;
}

const baseQueryInflationRequest: object = {};

export const QueryInflationRequest = {
  encode(
    _: QueryInflationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInflationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryInflationRequest } as QueryInflationRequest;
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

  fromJSON(_: any): QueryInflationRequest {
    const message = { ...baseQueryInflationRequest } as QueryInflationRequest;
    return message;
  },

  toJSON(_: QueryInflationRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryInflationRequest>): QueryInflationRequest {
    const message = { ...baseQueryInflationRequest } as QueryInflationRequest;
    return message;
  },
};

const baseQueryInflationResponse: object = {};

export const QueryInflationResponse = {
  encode(
    message: QueryInflationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== undefined) {
      InflationState.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInflationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryInflationResponse } as QueryInflationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = InflationState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInflationResponse {
    const message = { ...baseQueryInflationResponse } as QueryInflationResponse;
    if (object.state !== undefined && object.state !== null) {
      message.state = InflationState.fromJSON(object.state);
    } else {
      message.state = undefined;
    }
    return message;
  },

  toJSON(message: QueryInflationResponse): unknown {
    const obj: any = {};
    message.state !== undefined &&
      (obj.state = message.state
        ? InflationState.toJSON(message.state)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryInflationResponse>
  ): QueryInflationResponse {
    const message = { ...baseQueryInflationResponse } as QueryInflationResponse;
    if (object.state !== undefined && object.state !== null) {
      message.state = InflationState.fromPartial(object.state);
    } else {
      message.state = undefined;
    }
    return message;
  },
};

export interface Query {
  Inflation(request: QueryInflationRequest): Promise<QueryInflationResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Inflation = this.Inflation.bind(this);
  }
  Inflation(request: QueryInflationRequest): Promise<QueryInflationResponse> {
    const data = QueryInflationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "em.inflation.v1.Query",
      "Inflation",
      data
    );
    return promise.then((data) =>
      QueryInflationResponse.decode(new _m0.Reader(data))
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
