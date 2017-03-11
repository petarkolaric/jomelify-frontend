FROM node:6

RUN mkdir /app
COPY . /app
RUN cd /app && npm install

CMD cd /app && npm start
EXPOSE 3000
