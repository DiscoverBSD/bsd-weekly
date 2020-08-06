FROM node:12.14.1

WORKDIR /bsd-weekly
COPY package.json package-lock.json ./

# Install Node.js dependencies
RUN npm install

COPY . .
