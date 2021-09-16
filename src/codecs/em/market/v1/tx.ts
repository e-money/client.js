/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {
  TimeInForce,
  timeInForceFromJSON,
  timeInForceToJSON,
} from "../../../em/market/v1/market";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "em.market.v1";

export interface MsgAddLimitOrder {
  owner: string;
  clientOrderId: string;
  timeInForce: TimeInForce;
  source?: Coin;
  destination?: Coin;
}

export interface MsgAddLimitOrderResponse {}

export interface MsgAddMarketOrder {
  owner: string;
  clientOrderId: string;
  timeInForce: TimeInForce;
  source: string;
  destination?: Coin;
  maximumSlippage: string;
}

export interface MsgAddMarketOrderResponse {}

export interface MsgCancelOrder {
  owner: string;
  clientOrderId: string;
}

export interface MsgCancelOrderResponse {}

export interface MsgCancelReplaceLimitOrder {
  owner: string;
  originalClientOrderId: string;
  newClientOrderId: string;
  timeInForce: TimeInForce;
  source?: Coin;
  destination?: Coin;
}

export interface MsgCancelReplaceLimitOrderResponse {}

export interface MsgCancelReplaceMarketOrder {
  owner: string;
  originalClientOrderId: string;
  newClientOrderId: string;
  timeInForce: TimeInForce;
  source: string;
  destination?: Coin;
  maximumSlippage: string;
}

export interface MsgCancelReplaceMarketOrderResponse {}

const baseMsgAddLimitOrder: object = {
  owner: "",
  clientOrderId: "",
  timeInForce: 0,
};

export const MsgAddLimitOrder = {
  encode(
    message: MsgAddLimitOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.clientOrderId !== "") {
      writer.uint32(18).string(message.clientOrderId);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(24).int32(message.timeInForce);
    }
    if (message.source !== undefined) {
      Coin.encode(message.source, writer.uint32(34).fork()).ldelim();
    }
    if (message.destination !== undefined) {
      Coin.encode(message.destination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddLimitOrder } as MsgAddLimitOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.clientOrderId = reader.string();
          break;
        case 3:
          message.timeInForce = reader.int32() as any;
          break;
        case 4:
          message.source = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.destination = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddLimitOrder {
    const message = { ...baseMsgAddLimitOrder } as MsgAddLimitOrder;
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
    if (object.timeInForce !== undefined && object.timeInForce !== null) {
      message.timeInForce = timeInForceFromJSON(object.timeInForce);
    } else {
      message.timeInForce = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = Coin.fromJSON(object.source);
    } else {
      message.source = undefined;
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = Coin.fromJSON(object.destination);
    } else {
      message.destination = undefined;
    }
    return message;
  },

  toJSON(message: MsgAddLimitOrder): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.clientOrderId !== undefined &&
      (obj.clientOrderId = message.clientOrderId);
    message.timeInForce !== undefined &&
      (obj.timeInForce = timeInForceToJSON(message.timeInForce));
    message.source !== undefined &&
      (obj.source = message.source ? Coin.toJSON(message.source) : undefined);
    message.destination !== undefined &&
      (obj.destination = message.destination
        ? Coin.toJSON(message.destination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddLimitOrder>): MsgAddLimitOrder {
    const message = { ...baseMsgAddLimitOrder } as MsgAddLimitOrder;
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
    if (object.timeInForce !== undefined && object.timeInForce !== null) {
      message.timeInForce = object.timeInForce;
    } else {
      message.timeInForce = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = Coin.fromPartial(object.source);
    } else {
      message.source = undefined;
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = Coin.fromPartial(object.destination);
    } else {
      message.destination = undefined;
    }
    return message;
  },
};

const baseMsgAddLimitOrderResponse: object = {};

export const MsgAddLimitOrderResponse = {
  encode(
    _: MsgAddLimitOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddLimitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddLimitOrderResponse,
    } as MsgAddLimitOrderResponse;
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

  fromJSON(_: any): MsgAddLimitOrderResponse {
    const message = {
      ...baseMsgAddLimitOrderResponse,
    } as MsgAddLimitOrderResponse;
    return message;
  },

  toJSON(_: MsgAddLimitOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddLimitOrderResponse>
  ): MsgAddLimitOrderResponse {
    const message = {
      ...baseMsgAddLimitOrderResponse,
    } as MsgAddLimitOrderResponse;
    return message;
  },
};

const baseMsgAddMarketOrder: object = {
  owner: "",
  clientOrderId: "",
  timeInForce: 0,
  source: "",
  maximumSlippage: "",
};

export const MsgAddMarketOrder = {
  encode(
    message: MsgAddMarketOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.clientOrderId !== "") {
      writer.uint32(18).string(message.clientOrderId);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(24).int32(message.timeInForce);
    }
    if (message.source !== "") {
      writer.uint32(34).string(message.source);
    }
    if (message.destination !== undefined) {
      Coin.encode(message.destination, writer.uint32(42).fork()).ldelim();
    }
    if (message.maximumSlippage !== "") {
      writer.uint32(50).string(message.maximumSlippage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMarketOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddMarketOrder } as MsgAddMarketOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.clientOrderId = reader.string();
          break;
        case 3:
          message.timeInForce = reader.int32() as any;
          break;
        case 4:
          message.source = reader.string();
          break;
        case 5:
          message.destination = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.maximumSlippage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddMarketOrder {
    const message = { ...baseMsgAddMarketOrder } as MsgAddMarketOrder;
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
    if (object.timeInForce !== undefined && object.timeInForce !== null) {
      message.timeInForce = timeInForceFromJSON(object.timeInForce);
    } else {
      message.timeInForce = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = Coin.fromJSON(object.destination);
    } else {
      message.destination = undefined;
    }
    if (
      object.maximumSlippage !== undefined &&
      object.maximumSlippage !== null
    ) {
      message.maximumSlippage = String(object.maximumSlippage);
    } else {
      message.maximumSlippage = "";
    }
    return message;
  },

  toJSON(message: MsgAddMarketOrder): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.clientOrderId !== undefined &&
      (obj.clientOrderId = message.clientOrderId);
    message.timeInForce !== undefined &&
      (obj.timeInForce = timeInForceToJSON(message.timeInForce));
    message.source !== undefined && (obj.source = message.source);
    message.destination !== undefined &&
      (obj.destination = message.destination
        ? Coin.toJSON(message.destination)
        : undefined);
    message.maximumSlippage !== undefined &&
      (obj.maximumSlippage = message.maximumSlippage);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddMarketOrder>): MsgAddMarketOrder {
    const message = { ...baseMsgAddMarketOrder } as MsgAddMarketOrder;
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
    if (object.timeInForce !== undefined && object.timeInForce !== null) {
      message.timeInForce = object.timeInForce;
    } else {
      message.timeInForce = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = Coin.fromPartial(object.destination);
    } else {
      message.destination = undefined;
    }
    if (
      object.maximumSlippage !== undefined &&
      object.maximumSlippage !== null
    ) {
      message.maximumSlippage = object.maximumSlippage;
    } else {
      message.maximumSlippage = "";
    }
    return message;
  },
};

const baseMsgAddMarketOrderResponse: object = {};

export const MsgAddMarketOrderResponse = {
  encode(
    _: MsgAddMarketOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgAddMarketOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddMarketOrderResponse,
    } as MsgAddMarketOrderResponse;
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

  fromJSON(_: any): MsgAddMarketOrderResponse {
    const message = {
      ...baseMsgAddMarketOrderResponse,
    } as MsgAddMarketOrderResponse;
    return message;
  },

  toJSON(_: MsgAddMarketOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddMarketOrderResponse>
  ): MsgAddMarketOrderResponse {
    const message = {
      ...baseMsgAddMarketOrderResponse,
    } as MsgAddMarketOrderResponse;
    return message;
  },
};

const baseMsgCancelOrder: object = { owner: "", clientOrderId: "" };

export const MsgCancelOrder = {
  encode(
    message: MsgCancelOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.clientOrderId !== "") {
      writer.uint32(18).string(message.clientOrderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelOrder } as MsgCancelOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.clientOrderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelOrder {
    const message = { ...baseMsgCancelOrder } as MsgCancelOrder;
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
    return message;
  },

  toJSON(message: MsgCancelOrder): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.clientOrderId !== undefined &&
      (obj.clientOrderId = message.clientOrderId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelOrder>): MsgCancelOrder {
    const message = { ...baseMsgCancelOrder } as MsgCancelOrder;
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
    return message;
  },
};

const baseMsgCancelOrderResponse: object = {};

export const MsgCancelOrderResponse = {
  encode(
    _: MsgCancelOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelOrderResponse } as MsgCancelOrderResponse;
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

  fromJSON(_: any): MsgCancelOrderResponse {
    const message = { ...baseMsgCancelOrderResponse } as MsgCancelOrderResponse;
    return message;
  },

  toJSON(_: MsgCancelOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCancelOrderResponse>): MsgCancelOrderResponse {
    const message = { ...baseMsgCancelOrderResponse } as MsgCancelOrderResponse;
    return message;
  },
};

const baseMsgCancelReplaceLimitOrder: object = {
  owner: "",
  originalClientOrderId: "",
  newClientOrderId: "",
  timeInForce: 0,
};

export const MsgCancelReplaceLimitOrder = {
  encode(
    message: MsgCancelReplaceLimitOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.originalClientOrderId !== "") {
      writer.uint32(18).string(message.originalClientOrderId);
    }
    if (message.newClientOrderId !== "") {
      writer.uint32(26).string(message.newClientOrderId);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(32).int32(message.timeInForce);
    }
    if (message.source !== undefined) {
      Coin.encode(message.source, writer.uint32(42).fork()).ldelim();
    }
    if (message.destination !== undefined) {
      Coin.encode(message.destination, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelReplaceLimitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelReplaceLimitOrder,
    } as MsgCancelReplaceLimitOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.originalClientOrderId = reader.string();
          break;
        case 3:
          message.newClientOrderId = reader.string();
          break;
        case 4:
          message.timeInForce = reader.int32() as any;
          break;
        case 5:
          message.source = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.destination = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelReplaceLimitOrder {
    const message = {
      ...baseMsgCancelReplaceLimitOrder,
    } as MsgCancelReplaceLimitOrder;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (
      object.originalClientOrderId !== undefined &&
      object.originalClientOrderId !== null
    ) {
      message.originalClientOrderId = String(object.originalClientOrderId);
    } else {
      message.originalClientOrderId = "";
    }
    if (
      object.newClientOrderId !== undefined &&
      object.newClientOrderId !== null
    ) {
      message.newClientOrderId = String(object.newClientOrderId);
    } else {
      message.newClientOrderId = "";
    }
    if (object.timeInForce !== undefined && object.timeInForce !== null) {
      message.timeInForce = timeInForceFromJSON(object.timeInForce);
    } else {
      message.timeInForce = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = Coin.fromJSON(object.source);
    } else {
      message.source = undefined;
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = Coin.fromJSON(object.destination);
    } else {
      message.destination = undefined;
    }
    return message;
  },

  toJSON(message: MsgCancelReplaceLimitOrder): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.originalClientOrderId !== undefined &&
      (obj.originalClientOrderId = message.originalClientOrderId);
    message.newClientOrderId !== undefined &&
      (obj.newClientOrderId = message.newClientOrderId);
    message.timeInForce !== undefined &&
      (obj.timeInForce = timeInForceToJSON(message.timeInForce));
    message.source !== undefined &&
      (obj.source = message.source ? Coin.toJSON(message.source) : undefined);
    message.destination !== undefined &&
      (obj.destination = message.destination
        ? Coin.toJSON(message.destination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCancelReplaceLimitOrder>
  ): MsgCancelReplaceLimitOrder {
    const message = {
      ...baseMsgCancelReplaceLimitOrder,
    } as MsgCancelReplaceLimitOrder;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (
      object.originalClientOrderId !== undefined &&
      object.originalClientOrderId !== null
    ) {
      message.originalClientOrderId = object.originalClientOrderId;
    } else {
      message.originalClientOrderId = "";
    }
    if (
      object.newClientOrderId !== undefined &&
      object.newClientOrderId !== null
    ) {
      message.newClientOrderId = object.newClientOrderId;
    } else {
      message.newClientOrderId = "";
    }
    if (object.timeInForce !== undefined && object.timeInForce !== null) {
      message.timeInForce = object.timeInForce;
    } else {
      message.timeInForce = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = Coin.fromPartial(object.source);
    } else {
      message.source = undefined;
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = Coin.fromPartial(object.destination);
    } else {
      message.destination = undefined;
    }
    return message;
  },
};

const baseMsgCancelReplaceLimitOrderResponse: object = {};

export const MsgCancelReplaceLimitOrderResponse = {
  encode(
    _: MsgCancelReplaceLimitOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelReplaceLimitOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelReplaceLimitOrderResponse,
    } as MsgCancelReplaceLimitOrderResponse;
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

  fromJSON(_: any): MsgCancelReplaceLimitOrderResponse {
    const message = {
      ...baseMsgCancelReplaceLimitOrderResponse,
    } as MsgCancelReplaceLimitOrderResponse;
    return message;
  },

  toJSON(_: MsgCancelReplaceLimitOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCancelReplaceLimitOrderResponse>
  ): MsgCancelReplaceLimitOrderResponse {
    const message = {
      ...baseMsgCancelReplaceLimitOrderResponse,
    } as MsgCancelReplaceLimitOrderResponse;
    return message;
  },
};

const baseMsgCancelReplaceMarketOrder: object = {
  owner: "",
  originalClientOrderId: "",
  newClientOrderId: "",
  timeInForce: 0,
  source: "",
  maximumSlippage: "",
};

export const MsgCancelReplaceMarketOrder = {
  encode(
    message: MsgCancelReplaceMarketOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.originalClientOrderId !== "") {
      writer.uint32(18).string(message.originalClientOrderId);
    }
    if (message.newClientOrderId !== "") {
      writer.uint32(26).string(message.newClientOrderId);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(32).int32(message.timeInForce);
    }
    if (message.source !== "") {
      writer.uint32(42).string(message.source);
    }
    if (message.destination !== undefined) {
      Coin.encode(message.destination, writer.uint32(50).fork()).ldelim();
    }
    if (message.maximumSlippage !== "") {
      writer.uint32(58).string(message.maximumSlippage);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelReplaceMarketOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelReplaceMarketOrder,
    } as MsgCancelReplaceMarketOrder;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.originalClientOrderId = reader.string();
          break;
        case 3:
          message.newClientOrderId = reader.string();
          break;
        case 4:
          message.timeInForce = reader.int32() as any;
          break;
        case 5:
          message.source = reader.string();
          break;
        case 6:
          message.destination = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.maximumSlippage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelReplaceMarketOrder {
    const message = {
      ...baseMsgCancelReplaceMarketOrder,
    } as MsgCancelReplaceMarketOrder;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (
      object.originalClientOrderId !== undefined &&
      object.originalClientOrderId !== null
    ) {
      message.originalClientOrderId = String(object.originalClientOrderId);
    } else {
      message.originalClientOrderId = "";
    }
    if (
      object.newClientOrderId !== undefined &&
      object.newClientOrderId !== null
    ) {
      message.newClientOrderId = String(object.newClientOrderId);
    } else {
      message.newClientOrderId = "";
    }
    if (object.timeInForce !== undefined && object.timeInForce !== null) {
      message.timeInForce = timeInForceFromJSON(object.timeInForce);
    } else {
      message.timeInForce = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = String(object.source);
    } else {
      message.source = "";
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = Coin.fromJSON(object.destination);
    } else {
      message.destination = undefined;
    }
    if (
      object.maximumSlippage !== undefined &&
      object.maximumSlippage !== null
    ) {
      message.maximumSlippage = String(object.maximumSlippage);
    } else {
      message.maximumSlippage = "";
    }
    return message;
  },

  toJSON(message: MsgCancelReplaceMarketOrder): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.originalClientOrderId !== undefined &&
      (obj.originalClientOrderId = message.originalClientOrderId);
    message.newClientOrderId !== undefined &&
      (obj.newClientOrderId = message.newClientOrderId);
    message.timeInForce !== undefined &&
      (obj.timeInForce = timeInForceToJSON(message.timeInForce));
    message.source !== undefined && (obj.source = message.source);
    message.destination !== undefined &&
      (obj.destination = message.destination
        ? Coin.toJSON(message.destination)
        : undefined);
    message.maximumSlippage !== undefined &&
      (obj.maximumSlippage = message.maximumSlippage);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCancelReplaceMarketOrder>
  ): MsgCancelReplaceMarketOrder {
    const message = {
      ...baseMsgCancelReplaceMarketOrder,
    } as MsgCancelReplaceMarketOrder;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (
      object.originalClientOrderId !== undefined &&
      object.originalClientOrderId !== null
    ) {
      message.originalClientOrderId = object.originalClientOrderId;
    } else {
      message.originalClientOrderId = "";
    }
    if (
      object.newClientOrderId !== undefined &&
      object.newClientOrderId !== null
    ) {
      message.newClientOrderId = object.newClientOrderId;
    } else {
      message.newClientOrderId = "";
    }
    if (object.timeInForce !== undefined && object.timeInForce !== null) {
      message.timeInForce = object.timeInForce;
    } else {
      message.timeInForce = 0;
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = "";
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = Coin.fromPartial(object.destination);
    } else {
      message.destination = undefined;
    }
    if (
      object.maximumSlippage !== undefined &&
      object.maximumSlippage !== null
    ) {
      message.maximumSlippage = object.maximumSlippage;
    } else {
      message.maximumSlippage = "";
    }
    return message;
  },
};

const baseMsgCancelReplaceMarketOrderResponse: object = {};

export const MsgCancelReplaceMarketOrderResponse = {
  encode(
    _: MsgCancelReplaceMarketOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelReplaceMarketOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelReplaceMarketOrderResponse,
    } as MsgCancelReplaceMarketOrderResponse;
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

  fromJSON(_: any): MsgCancelReplaceMarketOrderResponse {
    const message = {
      ...baseMsgCancelReplaceMarketOrderResponse,
    } as MsgCancelReplaceMarketOrderResponse;
    return message;
  },

  toJSON(_: MsgCancelReplaceMarketOrderResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCancelReplaceMarketOrderResponse>
  ): MsgCancelReplaceMarketOrderResponse {
    const message = {
      ...baseMsgCancelReplaceMarketOrderResponse,
    } as MsgCancelReplaceMarketOrderResponse;
    return message;
  },
};

export interface Msg {
  AddLimitOrder(request: MsgAddLimitOrder): Promise<MsgAddLimitOrderResponse>;
  AddMarketOrder(
    request: MsgAddMarketOrder
  ): Promise<MsgAddMarketOrderResponse>;
  CancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse>;
  CancelReplaceLimitOrder(
    request: MsgCancelReplaceLimitOrder
  ): Promise<MsgCancelReplaceLimitOrderResponse>;
  CancelReplaceMarketOrder(
    request: MsgCancelReplaceMarketOrder
  ): Promise<MsgCancelReplaceMarketOrderResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddLimitOrder = this.AddLimitOrder.bind(this);
    this.AddMarketOrder = this.AddMarketOrder.bind(this);
    this.CancelOrder = this.CancelOrder.bind(this);
    this.CancelReplaceLimitOrder = this.CancelReplaceLimitOrder.bind(this);
    this.CancelReplaceMarketOrder = this.CancelReplaceMarketOrder.bind(this);
  }
  AddLimitOrder(request: MsgAddLimitOrder): Promise<MsgAddLimitOrderResponse> {
    const data = MsgAddLimitOrder.encode(request).finish();
    const promise = this.rpc.request("em.market.v1.Msg", "AddLimitOrder", data);
    return promise.then((data) =>
      MsgAddLimitOrderResponse.decode(new _m0.Reader(data))
    );
  }

  AddMarketOrder(
    request: MsgAddMarketOrder
  ): Promise<MsgAddMarketOrderResponse> {
    const data = MsgAddMarketOrder.encode(request).finish();
    const promise = this.rpc.request(
      "em.market.v1.Msg",
      "AddMarketOrder",
      data
    );
    return promise.then((data) =>
      MsgAddMarketOrderResponse.decode(new _m0.Reader(data))
    );
  }

  CancelOrder(request: MsgCancelOrder): Promise<MsgCancelOrderResponse> {
    const data = MsgCancelOrder.encode(request).finish();
    const promise = this.rpc.request("em.market.v1.Msg", "CancelOrder", data);
    return promise.then((data) =>
      MsgCancelOrderResponse.decode(new _m0.Reader(data))
    );
  }

  CancelReplaceLimitOrder(
    request: MsgCancelReplaceLimitOrder
  ): Promise<MsgCancelReplaceLimitOrderResponse> {
    const data = MsgCancelReplaceLimitOrder.encode(request).finish();
    const promise = this.rpc.request(
      "em.market.v1.Msg",
      "CancelReplaceLimitOrder",
      data
    );
    return promise.then((data) =>
      MsgCancelReplaceLimitOrderResponse.decode(new _m0.Reader(data))
    );
  }

  CancelReplaceMarketOrder(
    request: MsgCancelReplaceMarketOrder
  ): Promise<MsgCancelReplaceMarketOrderResponse> {
    const data = MsgCancelReplaceMarketOrder.encode(request).finish();
    const promise = this.rpc.request(
      "em.market.v1.Msg",
      "CancelReplaceMarketOrder",
      data
    );
    return promise.then((data) =>
      MsgCancelReplaceMarketOrderResponse.decode(new _m0.Reader(data))
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
