FROM docker.repos.balad.ir/node:18-buster-slim AS base
WORKDIR /app
COPY --chown=node:node package*.json ./
# RUN npm i -g pm2
RUN npm ci
COPY --chown=node:node . .
# RUN npm run build

FROM base as dev
WORKDIR /app
COPY --chown=node:node package*.json ./
# RUN npm i -g pm2
RUN npm ci
COPY --chown=node:node . .
# RUN npm run build
EXPOSE 3000
# CMD ["npm", "run", "start:dev"]
