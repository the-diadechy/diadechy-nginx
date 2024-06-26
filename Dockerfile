FROM nginx:latest

WORKDIR /app
COPY ./index.html /app/index.html 

#/usr/share/nginx/html/index.html
