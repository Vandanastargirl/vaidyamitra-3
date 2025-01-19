FROM node:16-alpine

# Install build dependencies for bcrypt
RUN apk add --no-cache make g++ python3

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Ensure bcrypt bindings are correctly rebuilt
RUN npm rebuild bcrypt --build-from-source

EXPOSE 4000
CMD ["npm", "start"]
