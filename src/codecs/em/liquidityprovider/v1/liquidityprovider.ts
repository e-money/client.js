/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "em.liquidityprovider.v1";

export interface LiquidityProviderAccount {
  /**
   * Any string address representation with the accompanying supporting encoding
   * and validation functions starting with bech32. However, in the
   * interest of cultivating wider acceptance for this module other arbitrary
   * address encodings outside the supported cosmos sdk formats perhaps would
   * fit nicely with this loosely defined provider identity specifier.
   */
  address: string;
  mintable: Coin[];
}

const baseLiquidityProviderAccount: object = { address: "" };

export const LiquidityProviderAccount = {
  encode(
    message: LiquidityProviderAccount,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.mintable) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LiquidityProviderAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseLiquidityProviderAccount,
    } as LiquidityProviderAccount;
    message.mintable = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.mintable.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LiquidityProviderAccount {
    const message = {
      ...baseLiquidityProviderAccount,
    } as LiquidityProviderAccount;
    message.mintable = [];
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.mintable !== undefined && object.mintable !== null) {
      for (const e of object.mintable) {
        message.mintable.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: LiquidityProviderAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
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
    object: DeepPartial<LiquidityProviderAccount>
  ): LiquidityProviderAccount {
    const message = {
      ...baseLiquidityProviderAccount,
    } as LiquidityProviderAccount;
    message.mintable = [];
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.mintable !== undefined && object.mintable !== null) {
      for (const e of object.mintable) {
        message.mintable.push(Coin.fromPartial(e));
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
