FROM node AS build
COPY ./ ./app
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx AS production
COPY --from=build /app /app 
WORKDIR /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
EXPOSE 80
