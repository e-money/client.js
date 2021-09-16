/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "em.market.v1";

export enum TimeInForce {
  TIME_IN_FORCE_UNSPECIFIED = 0,
  TIME_IN_FORCE_GOOD_TILL_CANCEL = 1,
  TIME_IN_FORCE_IMMEDIATE_OR_CANCEL = 2,
  TIME_IN_FORCE_FILL_OR_KILL = 3,
  UNRECOGNIZED = -1,
}

export function timeInForceFromJSON(object: any): TimeInForce {
  switch (object) {
    case 0:
    case "TIME_IN_FORCE_UNSPECIFIED":
      return TimeInForce.TIME_IN_FORCE_UNSPECIFIED;
    case 1:
    case "TIME_IN_FORCE_GOOD_TILL_CANCEL":
      return TimeInForce.TIME_IN_FORCE_GOOD_TILL_CANCEL;
    case 2:
    case "TIME_IN_FORCE_IMMEDIATE_OR_CANCEL":
      return TimeInForce.TIME_IN_FORCE_IMMEDIATE_OR_CANCEL;
    case 3:
    case "TIME_IN_FORCE_FILL_OR_KILL":
      return TimeInForce.TIME_IN_FORCE_FILL_OR_KILL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TimeInForce.UNRECOGNIZED;
  }
}

export function timeInForceToJSON(object: TimeInForce): string {
  switch (object) {
    case TimeInForce.TIME_IN_FORCE_UNSPECIFIED:
      return "TIME_IN_FORCE_UNSPECIFIED";
    case TimeInForce.TIME_IN_FORCE_GOOD_TILL_CANCEL:
      return "TIME_IN_FORCE_GOOD_TILL_CANCEL";
    case TimeInForce.TIME_IN_FORCE_IMMEDIATE_OR_CANCEL:
      return "TIME_IN_FORCE_IMMEDIATE_OR_CANCEL";
    case TimeInForce.TIME_IN_FORCE_FILL_OR_KILL:
      return "TIME_IN_FORCE_FILL_OR_KILL";
    default:
      return "UNKNOWN";
  }
}

export interface Instrument {
  source: string;
  destination: string;
}

export interface Order {
  orderId: Long;
  timeInForce: TimeInForce;
  owner: string;
  clientOrderId: string;
  source?: Coin;
  sourceRemaining: string;
  sourceFilled: string;
  destination?: Coin;
  destinationFilled: string;
  created?: Date;
}

export interface ExecutionPlan {
  price: string;
  firstOrder?: Order;
  secondOrder?: Order;
}

export interface MarketData {
  source: string;
  destination: string;
  lastPrice: string;
  timestamp?: Date;
}

const baseInstrument: object = { source: "", destination: "" };

export const Instrument = {
  encode(
    message: Instrument,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Instrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInstrument } as Instrument;
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

  fromJSON(object: any): Instrument {
    const message = { ...baseInstrument } as Instrument;
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

  toJSON(message: Instrument): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    message.destination !== undefined &&
      (obj.destination = message.destination);
    return obj;
  },

  fromPartial(object: DeepPartial<Instrument>): Instrument {
    const message = { ...baseInstrument } as Instrument;
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

const baseOrder: object = {
  orderId: Long.UZERO,
  timeInForce: 0,
  owner: "",
  clientOrderId: "",
  sourceRemaining: "",
  sourceFilled: "",
  destinationFilled: "",
};

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.orderId.isZero()) {
      writer.uint32(8).uint64(message.orderId);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(16).int32(message.timeInForce);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.clientOrderId !== "") {
      writer.uint32(34).string(message.clientOrderId);
    }
    if (message.source !== undefined) {
      Coin.encode(message.source, writer.uint32(42).fork()).ldelim();
    }
    if (message.sourceRemaining !== "") {
      writer.uint32(50).string(message.sourceRemaining);
    }
    if (message.sourceFilled !== "") {
      writer.uint32(58).string(message.sourceFilled);
    }
    if (message.destination !== undefined) {
      Coin.encode(message.destination, writer.uint32(66).fork()).ldelim();
    }
    if (message.destinationFilled !== "") {
      writer.uint32(74).string(message.destinationFilled);
    }
    if (message.created !== undefined) {
      Timestamp.encode(
        toTimestamp(message.created),
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrder } as Order;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.uint64() as Long;
          break;
        case 2:
          message.timeInForce = reader.int32() as any;
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.clientOrderId = reader.string();
          break;
        case 5:
          message.source = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.sourceRemaining = reader.string();
          break;
        case 7:
          message.sourceFilled = reader.string();
          break;
        case 8:
          message.destination = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.destinationFilled = reader.string();
          break;
        case 10:
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

  fromJSON(object: any): Order {
    const message = { ...baseOrder } as Order;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = Long.fromString(object.orderId);
    } else {
      message.orderId = Long.UZERO;
    }
    if (object.timeInForce !== undefined && object.timeInForce !== null) {
      message.timeInForce = timeInForceFromJSON(object.timeInForce);
    } else {
      message.timeInForce = 0;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.clientOrderId !== undefined && object.clientOrderId !== null) {
      message.clientOrderId = String(object.clientOrderId);
    } else {
      message.clientOrderId = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = Coin.fromJSON(object.source);
    } else {
      message.source = undefined;
    }
    if (
      object.sourceRemaining !== undefined &&
      object.sourceRemaining !== null
    ) {
      message.sourceRemaining = String(object.sourceRemaining);
    } else {
      message.sourceRemaining = "";
    }
    if (object.sourceFilled !== undefined && object.sourceFilled !== null) {
      message.sourceFilled = String(object.sourceFilled);
    } else {
      message.sourceFilled = "";
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = Coin.fromJSON(object.destination);
    } else {
      message.destination = undefined;
    }
    if (
      object.destinationFilled !== undefined &&
      object.destinationFilled !== null
    ) {
      message.destinationFilled = String(object.destinationFilled);
    } else {
      message.destinationFilled = "";
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = fromJsonTimestamp(object.created);
    } else {
      message.created = undefined;
    }
    return message;
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.orderId !== undefined &&
      (obj.orderId = (message.orderId || Long.UZERO).toString());
    message.timeInForce !== undefined &&
      (obj.timeInForce = timeInForceToJSON(message.timeInForce));
    message.owner !== undefined && (obj.owner = message.owner);
    message.clientOrderId !== undefined &&
      (obj.clientOrderId = message.clientOrderId);
    message.source !== undefined &&
      (obj.source = message.source ? Coin.toJSON(message.source) : undefined);
    message.sourceRemaining !== undefined &&
      (obj.sourceRemaining = message.sourceRemaining);
    message.sourceFilled !== undefined &&
      (obj.sourceFilled = message.sourceFilled);
    message.destination !== undefined &&
      (obj.destination = message.destination
        ? Coin.toJSON(message.destination)
        : undefined);
    message.destinationFilled !== undefined &&
      (obj.destinationFilled = message.destinationFilled);
    message.created !== undefined &&
      (obj.created = message.created.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = { ...baseOrder } as Order;
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId as Long;
    } else {
      message.orderId = Long.UZERO;
    }
    if (object.timeInForce !== undefined && object.timeInForce !== null) {
      message.timeInForce = object.timeInForce;
    } else {
      message.timeInForce = 0;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.clientOrderId !== undefined && object.clientOrderId !== null) {
      message.clientOrderId = object.clientOrderId;
    } else {
      message.clientOrderId = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = Coin.fromPartial(object.source);
    } else {
      message.source = undefined;
    }
    if (
      object.sourceRemaining !== undefined &&
      object.sourceRemaining !== null
    ) {
      message.sourceRemaining = object.sourceRemaining;
    } else {
      message.sourceRemaining = "";
    }
    if (object.sourceFilled !== undefined && object.sourceFilled !== null) {
      message.sourceFilled = object.sourceFilled;
    } else {
      message.sourceFilled = "";
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = Coin.fromPartial(object.destination);
    } else {
      message.destination = undefined;
    }
    if (
      object.destinationFilled !== undefined &&
      object.destinationFilled !== null
    ) {
      message.destinationFilled = object.destinationFilled;
    } else {
      message.destinationFilled = "";
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = object.created;
    } else {
      message.created = undefined;
    }
    return message;
  },
};

const baseExecutionPlan: object = { price: "" };

export const ExecutionPlan = {
  encode(
    message: ExecutionPlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.firstOrder !== undefined) {
      Order.encode(message.firstOrder, writer.uint32(18).fork()).ldelim();
    }
    if (message.secondOrder !== undefined) {
      Order.encode(message.secondOrder, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecutionPlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExecutionPlan } as ExecutionPlan;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.firstOrder = Order.decode(reader, reader.uint32());
          break;
        case 3:
          message.secondOrder = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExecutionPlan {
    const message = { ...baseExecutionPlan } as ExecutionPlan;
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    if (object.firstOrder !== undefined && object.firstOrder !== null) {
      message.firstOrder = Order.fromJSON(object.firstOrder);
    } else {
      message.firstOrder = undefined;
    }
    if (object.secondOrder !== undefined && object.secondOrder !== null) {
      message.secondOrder = Order.fromJSON(object.secondOrder);
    } else {
      message.secondOrder = undefined;
    }
    return message;
  },

  toJSON(message: ExecutionPlan): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    message.firstOrder !== undefined &&
      (obj.firstOrder = message.firstOrder
        ? Order.toJSON(message.firstOrder)
        : undefined);
    message.secondOrder !== undefined &&
      (obj.secondOrder = message.secondOrder
        ? Order.toJSON(message.secondOrder)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ExecutionPlan>): ExecutionPlan {
    const message = { ...baseExecutionPlan } as ExecutionPlan;
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    if (object.firstOrder !== undefined && object.firstOrder !== null) {
      message.firstOrder = Order.fromPartial(object.firstOrder);
    } else {
      message.firstOrder = undefined;
    }
    if (object.secondOrder !== undefined && object.secondOrder !== null) {
      message.secondOrder = Order.fromPartial(object.secondOrder);
    } else {
      message.secondOrder = undefined;
    }
    return message;
  },
};

const baseMarketData: object = { source: "", destination: "", lastPrice: "" };

export const MarketData = {
  encode(
    message: MarketData,
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
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarketData } as MarketData;
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
          message.timestamp = fromTimestamp(
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

  fromJSON(object: any): MarketData {
    const message = { ...baseMarketData } as MarketData;
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
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromJsonTimestamp(object.timestamp);
    } else {
      message.timestamp = undefined;
    }
    return message;
  },

  toJSON(message: MarketData): unknown {
    const obj: any = {};
    message.source !== undefined && (obj.source = message.source);
    message.destination !== undefined &&
      (obj.destination = message.destination);
    message.lastPrice !== undefined && (obj.lastPrice = message.lastPrice);
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<MarketData>): MarketData {
    const message = { ...baseMarketData } as MarketData;
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
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = undefined;
    }
    return message;
  },
};

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
