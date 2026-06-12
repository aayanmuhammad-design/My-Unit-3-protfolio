# Use official lightweight Node image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source
COPY . .

# Expose runtime port
EXPOSE 3000

# Start the server
CMD [ "npm", "start" ]
