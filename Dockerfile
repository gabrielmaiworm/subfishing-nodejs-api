# Use uma imagem base oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Compila o código TypeScript
RUN npm run build

# Expõe a porta 3000
EXPOSE 3000

# Define o comando para rodar a aplicação
CMD ["npm", "start"]
