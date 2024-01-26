# nest-js_redis_jwt_pg_grphql/Dockerfile

FROM node:16

WORKDIR /src

# Copy package files separately to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Start the application
CMD ["npm", "start"]
