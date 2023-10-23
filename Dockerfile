FROM docker.repos.balad.ir/node:18-buster-slim
WORKDIR /app
COPY package*.json ./
RUN npm i -g pm2
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
