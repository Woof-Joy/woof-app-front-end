# Estágio de construção
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install --force 
COPY . .
RUN npm run build

# Estágio de produção
FROM nginx:alpine
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
