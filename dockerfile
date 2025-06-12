# Build stage
FROM node:20-slim AS builder

WORKDIR /app

COPY package*.json ./

# 最初に package-lock.json に従って全てのパッケージをインストール
RUN npm ci

COPY . .

# hadolint ignore=DL3008
RUN \
  apt-get update && apt-get install -y --no-install-recommends libssl3 && \
  npx prisma generate && \
  npm run build

# devDependencies を削除
RUN npm prune --omit=dev

# Final stage
FROM gcr.io/distroless/nodejs20-debian12:nonroot

ENV \
  TZ='Asia/Tokyo' \
  NEXT_TELEMETRY_DISABLED=1

WORKDIR /app

# prisma が使用する OpenSSL ライブラリをコピー。prisma の依存関係変更に伴い起動しなくなった場合、
# コンテナ内で ldd node_modules/.prisma/client/libquery_engine* を実行し、不足を確認して下さい。
COPY --from=builder /usr/lib/x86_64-linux-gnu/libssl.so.3 /usr/lib/x86_64-linux-gnu/libssl.so.3
COPY --from=builder /usr/lib/x86_64-linux-gnu/libcrypto.so.3 /usr/lib/x86_64-linux-gnu/libcrypto.so.3

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next

EXPOSE 8000

CMD ["entrypoint.js"]
