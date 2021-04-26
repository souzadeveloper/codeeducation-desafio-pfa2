FROM node:15

WORKDIR /usr/src/app

EXPOSE 3000

COPY . .

RUN [ "npm", "install" ]

ENTRYPOINT [ "node", "./src/index.js" ]
