FROM node:alpine

# Set working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install --save-dev typescript

# Copy all files
COPY ./ ./

# Build app
RUN npm run build:production

# Expose the listening port
EXPOSE 3000

ENV PORT 3000

USER node

# Run npm start script when container starts
CMD [ "npm", "start:production" ]

