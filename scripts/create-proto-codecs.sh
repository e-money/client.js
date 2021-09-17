#!/bin/bash
PROTO_DIR="./protos"
OUT_DIR="./src/codecs"

# Prepare output directory
rm -rf "${OUT_DIR}"
mkdir -p "${OUT_DIR}"

protoc \
  --plugin="$(npm bin protoc-gen-ts_proto)" \
  --ts_proto_out="${OUT_DIR}" \
  --proto_path="${PROTO_DIR}" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "${PROTO_DIR}/em/authority/v1/tx.proto" \
  "${PROTO_DIR}/em/authority/v1/query.proto" \
  "${PROTO_DIR}/em/buyback/v1/query.proto" \
  "${PROTO_DIR}/em/inflation/v1/query.proto" \
  "${PROTO_DIR}/em/issuer/v1/tx.proto" \
  "${PROTO_DIR}/em/issuer/v1/query.proto" \
  "${PROTO_DIR}/em/liquidityprovider/v1/tx.proto" \
  "${PROTO_DIR}/em/liquidityprovider/v1/query.proto" \
  "${PROTO_DIR}/em/market/v1/tx.proto" \
  "${PROTO_DIR}/em/market/v1/query.proto" \
  "${PROTO_DIR}/em/queries/v1/query.proto"

# Remove unnecessary codec files
rm -rf \
  "${OUT_DIR}/cosmos_proto" \
  "${OUT_DIR}/gogoproto" \
  "${OUT_DIR}/google/api" \
  "${OUT_DIR}/google/protobuf/descriptor.ts"