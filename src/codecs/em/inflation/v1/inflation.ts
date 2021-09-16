/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";

export const protobufPackage = "em.inflation.v1";

export interface InflationAsset {
  denom: string;
  inflation: string;
  accum: string;
}

export interface InflationState {
  lastApplied?: Date;
  lastAppliedHeight: string;
  assets: InflationAsset[];
}

const baseInflationAsset: object = { denom: "", inflation: "", accum: "" };

export const InflationAsset = {
  encode(
    message: InflationAsset,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.inflation !== "") {
      writer.uint32(18).string(message.inflation);
    }
    if (message.accum !== "") {
      writer.uint32(26).string(message.accum);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InflationAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInflationAsset } as InflationAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.inflation = reader.string();
          break;
        case 3:
          message.accum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InflationAsset {
    const message = { ...baseInflationAsset } as InflationAsset;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.inflation !== undefined && object.inflation !== null) {
      message.inflation = String(object.inflation);
    } else {
      message.inflation = "";
    }
    if (object.accum !== undefined && object.accum !== null) {
      message.accum = String(object.accum);
    } else {
      message.accum = "";
    }
    return message;
  },

  toJSON(message: InflationAsset): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.inflation !== undefined && (obj.inflation = message.inflation);
    message.accum !== undefined && (obj.accum = message.accum);
    return obj;
  },

  fromPartial(object: DeepPartial<InflationAsset>): InflationAsset {
    const message = { ...baseInflationAsset } as InflationAsset;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.inflation !== undefined && object.inflation !== null) {
      message.inflation = object.inflation;
    } else {
      message.inflation = "";
    }
    if (object.accum !== undefined && object.accum !== null) {
      message.accum = object.accum;
    } else {
      message.accum = "";
    }
    return message;
  },
};

const baseInflationState: object = { lastAppliedHeight: "" };

export const InflationState = {
  encode(
    message: InflationState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lastApplied !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastApplied),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.lastAppliedHeight !== "") {
      writer.uint32(18).string(message.lastAppliedHeight);
    }
    for (const v of message.assets) {
      InflationAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InflationState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInflationState } as InflationState;
    message.assets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastApplied = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.lastAppliedHeight = reader.string();
          break;
        case 3:
          message.assets.push(InflationAsset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InflationState {
    const message = { ...baseInflationState } as InflationState;
    message.assets = [];
    if (object.lastApplied !== undefined && object.lastApplied !== null) {
      message.lastApplied = fromJsonTimestamp(object.lastApplied);
    } else {
      message.lastApplied = undefined;
    }
    if (
      object.lastAppliedHeight !== undefined &&
      object.lastAppliedHeight !== null
    ) {
      message.lastAppliedHeight = String(object.lastAppliedHeight);
    } else {
      message.lastAppliedHeight = "";
    }
    if (object.assets !== undefined && object.assets !== null) {
      for (const e of object.assets) {
        message.assets.push(InflationAsset.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: InflationState): unknown {
    const obj: any = {};
    message.lastApplied !== undefined &&
      (obj.lastApplied = message.lastApplied.toISOString());
    message.lastAppliedHeight !== undefined &&
      (obj.lastAppliedHeight = message.lastAppliedHeight);
    if (message.assets) {
      obj.assets = message.assets.map((e) =>
        e ? InflationAsset.toJSON(e) : undefined
      );
    } else {
      obj.assets = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<InflationState>): InflationState {
    const message = { ...baseInflationState } as InflationState;
    message.assets = [];
    if (object.lastApplied !== undefined && object.lastApplied !== null) {
      message.lastApplied = object.lastApplied;
    } else {
      message.lastApplied = undefined;
    }
    if (
      object.lastAppliedHeight !== undefined &&
      object.lastAppliedHeight !== null
    ) {
      message.lastAppliedHeight = object.lastAppliedHeight;
    } else {
      message.lastAppliedHeight = "";
    }
    if (object.assets !== undefined && object.assets !== null) {
      for (const e of object.assets) {
        message.assets.push(InflationAsset.fromPartial(e));
      }
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
