/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Order } from "../../../em/market/v1/market";

export const protobufPackage = "em.market.v1";

export interface QueryByAccountRequest {
  address: string;
}

export interface QueryByAccountResponse {
  orders: Order[];
}

export interface QueryInstrumentsRequest {}

export interface QueryInstrumentsResponse {
  instruments: QueryInstrumentsResponse_Element[];
}

export interface QueryInstrumentsResponse_Element {
  source: string;
  destination: string;
  lastPrice: string;
  bestPrice: string;
  lastTraded?: Date;
}

export interface QueryInstrumentRequest {
  source: string;
  destination: string;
}

export interface QueryInstrumentResponse {
  source: string;
  destination: string;
  orders: QueryOrderResponse[];
}

export interface QueryOrderResponse {
  id: Long;
  owner: string;
  sourceRemaining: string;
  clientOrderId: string;
  price: string;
  created?: Date;
}

const baseQueryByAccountRequest: object = { address: "" };

export const QueryByAccountRequest = {
  encode(
    message: QueryByAccountRequest,
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
  ): QueryByAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryByAccountRequest } as QueryByAccountRequest;
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

  fromJSON(object: any): QueryByAccountRequest {
    const message = { ...baseQueryByAccountRequest } as QueryByAccountRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryByAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryByAccountRequest>
  ): QueryByAccountRequest {
    const message = { ...baseQueryByAccountRequest } as QueryByAccountRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryByAccountResponse: object = {};

export const QueryByAccountResponse = {
  encode(
    message: QueryByAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryByAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryByAccountResponse } as QueryByAccountResponse;
    message.orders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryByAccountResponse {
    const message = { ...baseQueryByAccountResponse } as QueryByAccountResponse;
    message.orders = [];
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(Order.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryByAccountResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map((e) => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryByAccountResponse>
  ): QueryByAccountResponse {
    const message = { ...baseQueryByAccountResponse } as QueryByAccountResponse;
    message.orders = [];
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(Order.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryInstrumentsRequest: object = {};

export const QueryInstrumentsRequest = {
  encode(
    _: QueryInstrumentsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInstrumentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryInstrumentsRequest,
    } as QueryInstrumentsRequest;
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

  fromJSON(_: any): QueryInstrumentsRequest {
    const message = {
      ...baseQueryInstrumentsRequest,
    } as QueryInstrumentsRequest;
    return message;
  },

  toJSON(_: QueryInstrumentsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryInstrumentsRequest>
  ): QueryInstrumentsRequest {
    const message = {
      ...baseQueryInstrumentsRequest,
    } as QueryInstrumentsRequest;
    return message;
  },
};

const baseQueryInstrumentsResponse: object = {};

export const QueryInstrumentsResponse = {
  encode(
    message: QueryInstrumentsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.instruments) {
      QueryInstrumentsResponse_Element.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInstrumentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryInstrumentsResponse,
    } as QueryInstrumentsResponse;
    message.instruments = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instruments.push(
            QueryInstrumentsResponse_Element.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInstrumentsResponse {
    const message = {
      ...baseQueryInstrumentsResponse,
    } as QueryInstrumentsResponse;
    message.instruments = [];
    if (object.instruments !== undefined && object.instruments !== null) {
      for (const e of object.instruments) {
        message.instruments.push(QueryInstrumentsResponse_Element.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryInstrumentsResponse): unknown {
    const obj: any = {};
    if (message.instruments) {
      obj.instruments = message.instruments.map((e) =>
        e ? QueryInstrumentsResponse_Element.toJSON(e) : undefined
      );
    } else {
      obj.instruments = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryInstrumentsResponse>
  ): QueryInstrumentsResponse {
    const message = {
      ...baseQueryInstrumentsResponse,
    } as QueryInstrumentsResponse;
    message.instruments = [];
    if (object.instruments !== undefined && object.instruments !== null) {
      for (const e of object.instruments) {
        message.instruments.push(
          QueryInstrumentsResponse_Element.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseQueryInstrumentsResponse_Element: object = {
  source: "",
  destination: "",
  lastPrice: "",
  bestPrice: "",
};

export const QueryInstrumentsResponse_Element = {
  encode(
    message: QueryInstrumentsResponse_Element,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    if (message.lastPrice !== "") {
      writer.uint32(26).string(message.lastPrice);
    }
    if (message.bestPrice !== "") {
      writer.uint32(34).string(message.bestPrice);
    }
    if (message.lastTraded !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastTraded),
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInstrumentsResponse_Element {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryInstrumentsResponse_Element,
    } as QueryInstrumentsResponse_Element;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;
        case 2:
          message.destination = reader.string();
          break;
        case 3:
          message.lastPrice = reader.string();
          break;
        case 4:
          message.bestPrice = reader.string();
          break;
        case 5:
          message.lastTraded = fromTimestamp(
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

  fromJSON(object: any): QueryInstrumentsResponse_Element {
    const message = {
      ...baseQueryInstrumentsResponse_Element,
    } as QueryInstrumentsResponse_Element;
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = String(object.destination);
    } else {
      message.destination = "";
    }
    if (object.lastPrice !== undefined && object.lastPrice !== null) {
      message.lastPrice = String(object.lastPrice);
    } else {
      message.lastPrice = "";
    }
    if (object.bestPrice !== undefined && object.bestPrice !== null) {
      message.bestPrice = String(object.bestPrice);
    } else {
      message.bestPrice = "";
    }
    if (object.lastTraded !== undefined && object.lastTraded !== null) {
      message.lastTraded = fromJsonTimestamp(object.lastTraded);
    } else {
      message.lastTraded = undefined;
    }
    return message;
  },

  toJSON(message: QueryInstrumentsResponse_Element): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    message.destination !== undefined &&
      (obj.destination = message.destination);
    message.lastPrice !== undefined && (obj.lastPrice = message.lastPrice);
    message.bestPrice !== undefined && (obj.bestPrice = message.bestPrice);
    message.lastTraded !== undefined &&
      (obj.lastTraded = message.lastTraded.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryInstrumentsResponse_Element>
  ): QueryInstrumentsResponse_Element {
    const message = {
      ...baseQueryInstrumentsResponse_Element,
    } as QueryInstrumentsResponse_Element;
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination;
    } else {
      message.destination = "";
    }
    if (object.lastPrice !== undefined && object.lastPrice !== null) {
      message.lastPrice = object.lastPrice;
    } else {
      message.lastPrice = "";
    }
    if (object.bestPrice !== undefined && object.bestPrice !== null) {
      message.bestPrice = object.bestPrice;
    } else {
      message.bestPrice = "";
    }
    if (object.lastTraded !== undefined && object.lastTraded !== null) {
      message.lastTraded = object.lastTraded;
    } else {
      message.lastTraded = undefined;
    }
    return message;
  },
};

const baseQueryInstrumentRequest: object = { source: "", destination: "" };

export const QueryInstrumentRequest = {
  encode(
    message: QueryInstrumentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInstrumentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryInstrumentRequest } as QueryInstrumentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;
        case 2:
          message.destination = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInstrumentRequest {
    const message = { ...baseQueryInstrumentRequest } as QueryInstrumentRequest;
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = String(object.destination);
    } else {
      message.destination = "";
    }
    return message;
  },

  toJSON(message: QueryInstrumentRequest): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    message.destination !== undefined &&
      (obj.destination = message.destination);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryInstrumentRequest>
  ): QueryInstrumentRequest {
    const message = { ...baseQueryInstrumentRequest } as QueryInstrumentRequest;
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination;
    } else {
      message.destination = "";
    }
    return message;
  },
};

const baseQueryInstrumentResponse: object = { source: "", destination: "" };

export const QueryInstrumentResponse = {
  encode(
    message: QueryInstrumentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.source !== "") {
      writer.uint32(10).string(message.source);
    }
    if (message.destination !== "") {
      writer.uint32(18).string(message.destination);
    }
    for (const v of message.orders) {
      QueryOrderResponse.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryInstrumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryInstrumentResponse,
    } as QueryInstrumentResponse;
    message.orders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source = reader.string();
          break;
        case 2:
          message.destination = reader.string();
          break;
        case 3:
          message.orders.push(
            QueryOrderResponse.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryInstrumentResponse {
    const message = {
      ...baseQueryInstrumentResponse,
    } as QueryInstrumentResponse;
    message.orders = [];
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = String(object.destination);
    } else {
      message.destination = "";
    }
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(QueryOrderResponse.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryInstrumentResponse): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    message.destination !== undefined &&
      (obj.destination = message.destination);
    if (message.orders) {
      obj.orders = message.orders.map((e) =>
        e ? QueryOrderResponse.toJSON(e) : undefined
      );
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryInstrumentResponse>
  ): QueryInstrumentResponse {
    const message = {
      ...baseQueryInstrumentResponse,
    } as QueryInstrumentResponse;
    message.orders = [];
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination;
    } else {
      message.destination = "";
    }
    if (object.orders !== undefined && object.orders !== null) {
      for (const e of object.orders) {
        message.orders.push(QueryOrderResponse.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryOrderResponse: object = {
  id: Long.UZERO,
  owner: "",
  sourceRemaining: "",
  clientOrderId: "",
  price: "",
};

export const QueryOrderResponse = {
  encode(
    message: QueryOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.sourceRemaining !== "") {
      writer.uint32(26).string(message.sourceRemaining);
    }
    if (message.clientOrderId !== "") {
      writer.uint32(34).string(message.clientOrderId);
    }
    if (message.price !== "") {
      writer.uint32(42).string(message.price);
    }
    if (message.created !== undefined) {
      Timestamp.encode(
        toTimestamp(message.created),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOrderResponse } as QueryOrderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.sourceRemaining = reader.string();
          break;
        case 4:
          message.clientOrderId = reader.string();
          break;
        case 5:
          message.price = reader.string();
          break;
        case 6:
          message.created = fromTimestamp(
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

  fromJSON(object: any): QueryOrderResponse {
    const message = { ...baseQueryOrderResponse } as QueryOrderResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (
      object.sourceRemaining !== undefined &&
      object.sourceRemaining !== null
    ) {
      message.sourceRemaining = String(object.sourceRemaining);
    } else {
      message.sourceRemaining = "";
    }
    if (object.clientOrderId !== undefined && object.clientOrderId !== null) {
      message.clientOrderId = String(object.clientOrderId);
    } else {
      message.clientOrderId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = fromJsonTimestamp(object.created);
    } else {
      message.created = undefined;
    }
    return message;
  },

  toJSON(message: QueryOrderResponse): unknown {
    const obj: any = {};
    message.id !== undefined &&
      (obj.id = (message.id || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.sourceRemaining !== undefined &&
      (obj.sourceRemaining = message.sourceRemaining);
    message.clientOrderId !== undefined &&
      (obj.clientOrderId = message.clientOrderId);
    message.price !== undefined && (obj.price = message.price);
    message.created !== undefined &&
      (obj.created = message.created.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOrderResponse>): QueryOrderResponse {
    const message = { ...baseQueryOrderResponse } as QueryOrderResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (
      object.sourceRemaining !== undefined &&
      object.sourceRemaining !== null
    ) {
      message.sourceRemaining = object.sourceRemaining;
    } else {
      message.sourceRemaining = "";
    }
    if (object.clientOrderId !== undefined && object.clientOrderId !== null) {
      message.clientOrderId = object.clientOrderId;
    } else {
      message.clientOrderId = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = object.created;
    } else {
      message.created = undefined;
    }
    return message;
  },
};

export interface Query {
  ByAccount(request: QueryByAccountRequest): Promise<QueryByAccountResponse>;
  Instruments(
    request: QueryInstrumentsRequest
  ): Promise<QueryInstrumentsResponse>;
  Instrument(request: QueryInstrumentRequest): Promise<QueryInstrumentResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ByAccount = this.ByAccount.bind(this);
    this.Instruments = this.Instruments.bind(this);
    this.Instrument = this.Instrument.bind(this);
  }
  ByAccount(request: QueryByAccountRequest): Promise<QueryByAccountResponse> {
    const data = QueryByAccountRequest.encode(request).finish();
    const promise = this.rpc.request("em.market.v1.Query", "ByAccount", data);
    return promise.then((data) =>
      QueryByAccountResponse.decode(new _m0.Reader(data))
    );
  }

  Instruments(
    request: QueryInstrumentsRequest
  ): Promise<QueryInstrumentsResponse> {
    const data = QueryInstrumentsRequest.encode(request).finish();
    const promise = this.rpc.request("em.market.v1.Query", "Instruments", data);
    return promise.then((data) =>
      QueryInstrumentsResponse.decode(new _m0.Reader(data))
    );
  }

  Instrument(
    request: QueryInstrumentRequest
  ): Promise<QueryInstrumentResponse> {
    const data = QueryInstrumentRequest.encode(request).finish();
    const promise = this.rpc.request("em.market.v1.Query", "Instrument", data);
    return promise.then((data) =>
      QueryInstrumentResponse.decode(new _m0.Reader(data))
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
