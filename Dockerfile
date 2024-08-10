FROM node AS build
COPY /data /data
WORKDIR /data
COPY package*.json .
RUN npm install
RUN npm run tsc

FROM nginx AS production
WORKDIR /data
COPY --from=build /data /data 
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
