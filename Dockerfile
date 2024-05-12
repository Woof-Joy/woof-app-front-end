# Estágio de construção
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install --force 
COPY . .
RUN npm run build

# Estágio de produção
FROM nginx:alpine
COPY --from=build /usr/src/app/build/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
