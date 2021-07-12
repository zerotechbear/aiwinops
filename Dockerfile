# Stage 1 - AIWinOps Build Process
FROM node:14 as build-aiwinops

# WORKDIR /usr/src/app
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]


