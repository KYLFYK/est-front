FROM node:16.13.2-alpine3.15 as builder

ARG ENV_STAGES

# Set working directory
WORKDIR /app

ENV ENV_STAGES=${ENV_STAGES}

# Copy package.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package.json ./

# Install dependencies
RUN npm install --save-dev typescript

# Copy project
COPY ./ ./

# Expose the listening port
EXPOSE 3000

ENV PORT 3000
ENV ENV_STAGES=${ENV_STAGES}

# Run npm start script when container starts
CMD [ "npm", "run", "dev" ] 

HEALTHCHECK --start-period=30s \
            --interval=10s \
            --timeout=10s \
            --retries=3 \
            CMD [ "curl", "--fail", "http://localhost:3000" ]

# Build app
#RUN npm run build:${ENV_STAGES}

#FROM node:16.13.2-alpine3.15

#ARG ENV_STAGES

#RUN apk --no-cache add curl

#USER node

#WORKDIR /app

#COPY --from=builder --chown=node /app/.next .next
#COPY --from=builder --chown=node /app/public public 
#COPY --from=builder --chown=node /app/node_modules node_modules
#COPY --from=builder --chown=node /app/package.json package.json
#COPY --from=builder --chown=node /app/next.config.js next.config.js
#COPY --from=builder --chown=node /app/.env* ./

# Expose the listening port
#EXPOSE 3000

#ENV PORT 3000
#ENV ENV_STAGES=${ENV_STAGES}

# Run npm start script when container starts
#CMD [ "npm", "run", "start:${ENV_STAGES}" ] 
