# syntax=docker/dockerfile:1

# sudo docker build . -t mytest -f ./src/Dockerfile
# sudo docker run -it mytest
FROM node:18-alpine

WORKDIR /app/
COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
RUN yarn install
COPY . .

RUN yarn build
EXPOSE 8080
EXPOSE 11125
CMD ["node", "/app/build/start.js"]