FROM oven/bun

WORKDIR /app

COPY package.json .

RUN bun install --production

COPY . .

EXPOSE 3000

ENTRYPOINT ["bun",  "dev"]