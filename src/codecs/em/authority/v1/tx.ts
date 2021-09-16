/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Plan } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "em.authority.v1";

export interface MsgCreateIssuer {
  authority: string;
  issuer: string;
  denominations: Denomination[];
}

export interface Denomination {
  /** base represents the base denom (should be the DenomUnit with exponent = 0). */
  base: string;
  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   */
  display: string;
  description: string;
}

export interface MsgCreateIssuerResponse {}

export interface MsgDestroyIssuer {
  authority: string;
  issuer: string;
}

export interface MsgDestroyIssuerResponse {}

export interface MsgSetGasPrices {
  authority: string;
  gasPrices: DecCoin[];
}

export interface MsgSetGasPricesResponse {}

export interface MsgReplaceAuthority {
  authority: string;
  newAuthority: string;
}

export interface MsgReplaceAuthorityResponse {
  newAuthorityAddress: string;
}

export interface MsgScheduleUpgrade {
  authority: string;
  plan?: Plan;
}

export interface MsgScheduleUpgradeResponse {}

const baseMsgCreateIssuer: object = { authority: "", issuer: "" };

export const MsgCreateIssuer = {
  encode(
    message: MsgCreateIssuer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    for (const v of message.denominations) {
      Denomination.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIssuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateIssuer } as MsgCreateIssuer;
    message.denominations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.denominations.push(
            Denomination.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateIssuer {
    const message = { ...baseMsgCreateIssuer } as MsgCreateIssuer;
    message.denominations = [];
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    if (object.denominations !== undefined && object.denominations !== null) {
      for (const e of object.denominations) {
        message.denominations.push(Denomination.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateIssuer): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    if (message.denominations) {
      obj.denominations = message.denominations.map((e) =>
        e ? Denomination.toJSON(e) : undefined
      );
    } else {
      obj.denominations = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateIssuer>): MsgCreateIssuer {
    const message = { ...baseMsgCreateIssuer } as MsgCreateIssuer;
    message.denominations = [];
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    if (object.denominations !== undefined && object.denominations !== null) {
      for (const e of object.denominations) {
        message.denominations.push(Denomination.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDenomination: object = { base: "", display: "", description: "" };

export const Denomination = {
  encode(
    message: Denomination,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }
    if (message.display !== "") {
      writer.uint32(18).string(message.display);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Denomination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDenomination } as Denomination;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = reader.string();
          break;
        case 2:
          message.display = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Denomination {
    const message = { ...baseDenomination } as Denomination;
    if (object.base !== undefined && object.base !== null) {
      message.base = String(object.base);
    } else {
      message.base = "";
    }
    if (object.display !== undefined && object.display !== null) {
      message.display = String(object.display);
    } else {
      message.display = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: Denomination): unknown {
    const obj: any = {};
    message.base !== undefined && (obj.base = message.base);
    message.display !== undefined && (obj.display = message.display);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<Denomination>): Denomination {
    const message = { ...baseDenomination } as Denomination;
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    } else {
      message.base = "";
    }
    if (object.display !== undefined && object.display !== null) {
      message.display = object.display;
    } else {
      message.display = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseMsgCreateIssuerResponse: object = {};

export const MsgCreateIssuerResponse = {
  encode(
    _: MsgCreateIssuerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateIssuerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateIssuerResponse,
    } as MsgCreateIssuerResponse;
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

  fromJSON(_: any): MsgCreateIssuerResponse {
    const message = {
      ...baseMsgCreateIssuerResponse,
    } as MsgCreateIssuerResponse;
    return message;
  },

  toJSON(_: MsgCreateIssuerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateIssuerResponse>
  ): MsgCreateIssuerResponse {
    const message = {
      ...baseMsgCreateIssuerResponse,
    } as MsgCreateIssuerResponse;
    return message;
  },
};

const baseMsgDestroyIssuer: object = { authority: "", issuer: "" };

export const MsgDestroyIssuer = {
  encode(
    message: MsgDestroyIssuer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDestroyIssuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDestroyIssuer } as MsgDestroyIssuer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDestroyIssuer {
    const message = { ...baseMsgDestroyIssuer } as MsgDestroyIssuer;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer);
    } else {
      message.issuer = "";
    }
    return message;
  },

  toJSON(message: MsgDestroyIssuer): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDestroyIssuer>): MsgDestroyIssuer {
    const message = { ...baseMsgDestroyIssuer } as MsgDestroyIssuer;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer;
    } else {
      message.issuer = "";
    }
    return message;
  },
};

const baseMsgDestroyIssuerResponse: object = {};

export const MsgDestroyIssuerResponse = {
  encode(
    _: MsgDestroyIssuerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDestroyIssuerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDestroyIssuerResponse,
    } as MsgDestroyIssuerResponse;
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

  fromJSON(_: any): MsgDestroyIssuerResponse {
    const message = {
      ...baseMsgDestroyIssuerResponse,
    } as MsgDestroyIssuerResponse;
    return message;
  },

  toJSON(_: MsgDestroyIssuerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDestroyIssuerResponse>
  ): MsgDestroyIssuerResponse {
    const message = {
      ...baseMsgDestroyIssuerResponse,
    } as MsgDestroyIssuerResponse;
    return message;
  },
};

const baseMsgSetGasPrices: object = { authority: "" };

export const MsgSetGasPrices = {
  encode(
    message: MsgSetGasPrices,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.gasPrices) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetGasPrices {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetGasPrices } as MsgSetGasPrices;
    message.gasPrices = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.gasPrices.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetGasPrices {
    const message = { ...baseMsgSetGasPrices } as MsgSetGasPrices;
    message.gasPrices = [];
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.gasPrices !== undefined && object.gasPrices !== null) {
      for (const e of object.gasPrices) {
        message.gasPrices.push(DecCoin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgSetGasPrices): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.gasPrices) {
      obj.gasPrices = message.gasPrices.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.gasPrices = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetGasPrices>): MsgSetGasPrices {
    const message = { ...baseMsgSetGasPrices } as MsgSetGasPrices;
    message.gasPrices = [];
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.gasPrices !== undefined && object.gasPrices !== null) {
      for (const e of object.gasPrices) {
        message.gasPrices.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgSetGasPricesResponse: object = {};

export const MsgSetGasPricesResponse = {
  encode(
    _: MsgSetGasPricesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetGasPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetGasPricesResponse,
    } as MsgSetGasPricesResponse;
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

  fromJSON(_: any): MsgSetGasPricesResponse {
    const message = {
      ...baseMsgSetGasPricesResponse,
    } as MsgSetGasPricesResponse;
    return message;
  },

  toJSON(_: MsgSetGasPricesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetGasPricesResponse>
  ): MsgSetGasPricesResponse {
    const message = {
      ...baseMsgSetGasPricesResponse,
    } as MsgSetGasPricesResponse;
    return message;
  },
};

const baseMsgReplaceAuthority: object = { authority: "", newAuthority: "" };

export const MsgReplaceAuthority = {
  encode(
    message: MsgReplaceAuthority,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.newAuthority !== "") {
      writer.uint32(18).string(message.newAuthority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReplaceAuthority {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgReplaceAuthority } as MsgReplaceAuthority;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.newAuthority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReplaceAuthority {
    const message = { ...baseMsgReplaceAuthority } as MsgReplaceAuthority;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.newAuthority !== undefined && object.newAuthority !== null) {
      message.newAuthority = String(object.newAuthority);
    } else {
      message.newAuthority = "";
    }
    return message;
  },

  toJSON(message: MsgReplaceAuthority): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.newAuthority !== undefined &&
      (obj.newAuthority = message.newAuthority);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgReplaceAuthority>): MsgReplaceAuthority {
    const message = { ...baseMsgReplaceAuthority } as MsgReplaceAuthority;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.newAuthority !== undefined && object.newAuthority !== null) {
      message.newAuthority = object.newAuthority;
    } else {
      message.newAuthority = "";
    }
    return message;
  },
};

const baseMsgReplaceAuthorityResponse: object = { newAuthorityAddress: "" };

export const MsgReplaceAuthorityResponse = {
  encode(
    message: MsgReplaceAuthorityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.newAuthorityAddress !== "") {
      writer.uint32(10).string(message.newAuthorityAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgReplaceAuthorityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgReplaceAuthorityResponse,
    } as MsgReplaceAuthorityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newAuthorityAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReplaceAuthorityResponse {
    const message = {
      ...baseMsgReplaceAuthorityResponse,
    } as MsgReplaceAuthorityResponse;
    if (
      object.newAuthorityAddress !== undefined &&
      object.newAuthorityAddress !== null
    ) {
      message.newAuthorityAddress = String(object.newAuthorityAddress);
    } else {
      message.newAuthorityAddress = "";
    }
    return message;
  },

  toJSON(message: MsgReplaceAuthorityResponse): unknown {
    const obj: any = {};
    message.newAuthorityAddress !== undefined &&
      (obj.newAuthorityAddress = message.newAuthorityAddress);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgReplaceAuthorityResponse>
  ): MsgReplaceAuthorityResponse {
    const message = {
      ...baseMsgReplaceAuthorityResponse,
    } as MsgReplaceAuthorityResponse;
    if (
      object.newAuthorityAddress !== undefined &&
      object.newAuthorityAddress !== null
    ) {
      message.newAuthorityAddress = object.newAuthorityAddress;
    } else {
      message.newAuthorityAddress = "";
    }
    return message;
  },
};

const baseMsgScheduleUpgrade: object = { authority: "" };

export const MsgScheduleUpgrade = {
  encode(
    message: MsgScheduleUpgrade,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgScheduleUpgrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgScheduleUpgrade } as MsgScheduleUpgrade;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgScheduleUpgrade {
    const message = { ...baseMsgScheduleUpgrade } as MsgScheduleUpgrade;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority);
    } else {
      message.authority = "";
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromJSON(object.plan);
    } else {
      message.plan = undefined;
    }
    return message;
  },

  toJSON(message: MsgScheduleUpgrade): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.plan !== undefined &&
      (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgScheduleUpgrade>): MsgScheduleUpgrade {
    const message = { ...baseMsgScheduleUpgrade } as MsgScheduleUpgrade;
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    } else {
      message.authority = "";
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromPartial(object.plan);
    } else {
      message.plan = undefined;
    }
    return message;
  },
};

const baseMsgScheduleUpgradeResponse: object = {};

export const MsgScheduleUpgradeResponse = {
  encode(
    _: MsgScheduleUpgradeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgScheduleUpgradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgScheduleUpgradeResponse,
    } as MsgScheduleUpgradeResponse;
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

  fromJSON(_: any): MsgScheduleUpgradeResponse {
    const message = {
      ...baseMsgScheduleUpgradeResponse,
    } as MsgScheduleUpgradeResponse;
    return message;
  },

  toJSON(_: MsgScheduleUpgradeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgScheduleUpgradeResponse>
  ): MsgScheduleUpgradeResponse {
    const message = {
      ...baseMsgScheduleUpgradeResponse,
    } as MsgScheduleUpgradeResponse;
    return message;
  },
};

export interface Msg {
  CreateIssuer(request: MsgCreateIssuer): Promise<MsgCreateIssuerResponse>;
  DestroyIssuer(request: MsgDestroyIssuer): Promise<MsgDestroyIssuerResponse>;
  SetGasPrices(request: MsgSetGasPrices): Promise<MsgSetGasPricesResponse>;
  ReplaceAuthority(
    request: MsgReplaceAuthority
  ): Promise<MsgReplaceAuthorityResponse>;
  ScheduleUpgrade(
    request: MsgScheduleUpgrade
  ): Promise<MsgScheduleUpgradeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateIssuer = this.CreateIssuer.bind(this);
    this.DestroyIssuer = this.DestroyIssuer.bind(this);
    this.SetGasPrices = this.SetGasPrices.bind(this);
    this.ReplaceAuthority = this.ReplaceAuthority.bind(this);
    this.ScheduleUpgrade = this.ScheduleUpgrade.bind(this);
  }
  CreateIssuer(request: MsgCreateIssuer): Promise<MsgCreateIssuerResponse> {
    const data = MsgCreateIssuer.encode(request).finish();
    const promise = this.rpc.request(
      "em.authority.v1.Msg",
      "CreateIssuer",
      data
    );
    return promise.then((data) =>
      MsgCreateIssuerResponse.decode(new _m0.Reader(data))
    );
  }

  DestroyIssuer(request: MsgDestroyIssuer): Promise<MsgDestroyIssuerResponse> {
    const data = MsgDestroyIssuer.encode(request).finish();
    const promise = this.rpc.request(
      "em.authority.v1.Msg",
      "DestroyIssuer",
      data
    );
    return promise.then((data) =>
      MsgDestroyIssuerResponse.decode(new _m0.Reader(data))
    );
  }

  SetGasPrices(request: MsgSetGasPrices): Promise<MsgSetGasPricesResponse> {
    const data = MsgSetGasPrices.encode(request).finish();
    const promise = this.rpc.request(
      "em.authority.v1.Msg",
      "SetGasPrices",
      data
    );
    return promise.then((data) =>
      MsgSetGasPricesResponse.decode(new _m0.Reader(data))
    );
  }

  ReplaceAuthority(
    request: MsgReplaceAuthority
  ): Promise<MsgReplaceAuthorityResponse> {
    const data = MsgReplaceAuthority.encode(request).finish();
    const promise = this.rpc.request(
      "em.authority.v1.Msg",
      "ReplaceAuthority",
      data
    );
    return promise.then((data) =>
      MsgReplaceAuthorityResponse.decode(new _m0.Reader(data))
    );
  }

  ScheduleUpgrade(
    request: MsgScheduleUpgrade
  ): Promise<MsgScheduleUpgradeResponse> {
    const data = MsgScheduleUpgrade.encode(request).finish();
    const promise = this.rpc.request(
      "em.authority.v1.Msg",
      "ScheduleUpgrade",
      data
    );
    return promise.then((data) =>
      MsgScheduleUpgradeResponse.decode(new _m0.Reader(data))
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
