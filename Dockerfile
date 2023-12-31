# Install dependencies only when needed
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN yarn build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

#ENV NODE_ENV production
ENV NODE_ENV development

RUN addgroup --system --gid 1001 user
RUN adduser --system --uid 1001 user

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
#COPY --from=builder --chown=slideruser:slidergroup /app/.next/standalone ./
#COPY --from=builder --chown=slideruser:slidergroup /app/.next/static ./.next/static

USER user

EXPOSE 3000

ENV PORT 3001

CMD ["yarn", "start"]
