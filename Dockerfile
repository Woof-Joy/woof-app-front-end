# Estágio de construção
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install --force 
COPY . .
RUN npm run build

# Estágio de produção
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
