# ClickWorthy — Dockerfile
# Multi-stage build for a small production image.
# Builds the TanStack Start app, then serves the built output on port 3000.

FROM node:20-alpine AS base
WORKDIR /app
RUN corepack enable && corepack prepare bun@latest --activate || true
RUN npm i -g bun@latest

# ---- deps ----
FROM base AS deps
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile || bun install

# ---- build ----
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# ---- runtime ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

RUN npm i -g bun@latest

COPY --from=build /app /app

EXPOSE 3000
# Serves the built output. Adjust to your TanStack Start server entrypoint
# if you deploy with a custom Node server.
CMD ["bun", "run", "preview", "--port", "3000", "--host", "0.0.0.0"]
