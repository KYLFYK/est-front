FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
# install dependencies
RUN yarn install
# copy source files
COPY . .
# start app
RUN yarn build
EXPOSE 3000
ENTRYPOINT ["yarn"]
CMD ["serve"]
