FROM node:18.16.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

#CMD ["npx", "-y", "http-server", "-p", "8000", "/frontend/build"]
CMD ["npx", "-y", "http-server", "-p", "8000", "/app/build"]
