FROM node:erbium-alpine

WORKDIR /usr/src/app

COPY ./ /usr/src/app/

RUN npm install 

EXPOSE 3000

CMD ["sh", "-c", "date ; npm start "]

#byRoxsRoss