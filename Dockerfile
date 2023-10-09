# Utilizamos la imagen base de Node.js versión 18
FROM node:18

# Establecemos el directorio de trabajo dentro del contenedor como /app
WORKDIR /app

# Copiamos el archivo package.json al directorio de trabajo
COPY package.json .

# Instalamos las dependencias definidas en el archivo package.json
RUN npm install

# Copiamos todos los archivos de la aplicación al directorio de trabajo
COPY . .

# Generamos la aplicación para el entorno de producción
RUN npm run build

# Iniciamos la aplicación, que por defecto se ejecutará en localhost:3000
CMD ["npm", "start"]