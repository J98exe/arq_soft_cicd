# Usar una imagen base oficial de Node.js
FROM node:14

# Crear un directorio de trabajo para la aplicación
WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar el resto del código de la aplicación al directorio de trabajo
COPY . .

# Exponer el puerto en el que la aplicación va a correr (por defecto, 3000)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
