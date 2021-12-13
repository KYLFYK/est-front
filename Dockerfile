FROM node:15.0
WORKDIR /app
COPY package*.json ./
# install dependencies
RUN yarn install
# copy source files
COPY . .
# start app
RUN npm run storybook
EXPOSE 6006
ENTRYPOINT ["yarn"]
CMD ["serve"]
