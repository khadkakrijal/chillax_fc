# Base image
FROM node:19-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy project files
COPY . .

# Build the app
RUN yarn run build

# Start the app
CMD ["yarn", "start"]