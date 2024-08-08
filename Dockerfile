# Usar una imagen base de Node
FROM node:20-alpine

ARG EMAIL
ARG NAME
ARG GITHUB_TOKEN

# Actualizar el sistema e instala git
RUN apk update && apk upgrade  && apk add git


# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Configurar git dentro del contenedor, para que no haya problemas al hacer push, pull, etc. Con v
RUN git config --global user.email "$EMAIL" && git config --global user.name "$NAME"
RUN git config --global --add safe.directory /usr/src/app
RUN git config --global url."https://$GITHUB_TOKEN:x-oauth-basic@github.com/".insteadOf "https://github.com/"
RUN git config --global init.defaultBranch main

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install -D 

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto en el que la aplicación correrá
EXPOSE 5173
# Comando para correr la aplicación
CMD ["npm", "run", "dev"]