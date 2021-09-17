/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "em.issuer.v1";

export interface Issuer {
  address: string;
  denoms: string[];
}

export interface Issuers {
  issuers: Issuer[];
}

const baseIssuer: object = { address: "", denoms: "" };

export const Issuer = {
  encode(
    message: Issuer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.denoms) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Issuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIssuer } as Issuer;
    message.denoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Issuer {
    const message = { ...baseIssuer } as Issuer;
    message.denoms = [];
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Issuer): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Issuer>): Issuer {
    const message = { ...baseIssuer } as Issuer;
    message.denoms = [];
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(e);
      }
    }
    return message;
  },
};

const baseIssuers: object = {};

export const Issuers = {
  encode(
    message: Issuers,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.issuers) {
      Issuer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Issuers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIssuers } as Issuers;
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

  fromJSON(object: any): Issuers {
    const message = { ...baseIssuers } as Issuers;
    message.issuers = [];
    if (object.issuers !== undefined && object.issuers !== null) {
      for (const e of object.issuers) {
        message.issuers.push(Issuer.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: Issuers): unknown {
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

  fromPartial(object: DeepPartial<Issuers>): Issuers {
    const message = { ...baseIssuers } as Issuers;
    message.issuers = [];
    if (object.issuers !== undefined && object.issuers !== null) {
      for (const e of object.issuers) {
        message.issuers.push(Issuer.fromPartial(e));
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
