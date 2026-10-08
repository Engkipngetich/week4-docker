FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

RUN npm ci --omit=dev && \
    apk update && \
    apk upgrade

RUN addgroup -S -g 10001 appgroup && \
    adduser -S -u 10001 -G appgroup appuser

COPY --chown=appuser:appgroup . .

# npm is not reuired to run the application
RUN rm -rf /usr/local/lib/node_modules/npm \
           /user/local/bin/npm \
           /usr/local/bin/npx

  
USER 10001

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD ["wget", "--no-verbose", "--tries=1", "--spider", "http://127.0.0.1:3000/"]

CMD ["node", "server.js"]
