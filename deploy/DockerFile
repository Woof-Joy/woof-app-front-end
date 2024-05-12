# Estágio de construção
FROM node:14 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --force -y
COPY . .
RUN npm run build

# Estágio de produção
FROM nginx:latest
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
