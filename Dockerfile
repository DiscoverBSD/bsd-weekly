FROM node:18.16.1

WORKDIR /bsd-weekly
COPY package.json package-lock.json ./

# Install Node.js dependencies
RUN npm install -g npm
RUN npm install

COPY . .
