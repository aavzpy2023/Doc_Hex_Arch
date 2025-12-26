# --- ./Dockerfile ---

# -----------------------------------------------------------------------------
# STAGE 1: Builder (Compilación)
# Usamos una imagen ligera de Node basada en Alpine Linux
# -----------------------------------------------------------------------------
FROM node:22-alpine AS builder

# Establecemos el directorio de trabajo seguro
WORKDIR /app

# Copiamos solo los archivos de dependencias primero para aprovechar la caché de capas de Docker
COPY package.json package-lock.json ./

# 'npm ci' es más estricto y rápido que 'npm install' para entornos de CI/CD/Docker
# Asegura una instalación determinista basada exactamente en el lockfile.
RUN npm ci

# Copiamos el resto del código fuente
COPY . .

# Ejecutamos el build de Vite. Esto generará la carpeta /dist
RUN npm run build

# -----------------------------------------------------------------------------
# STAGE 2: Runner (Ejecución)
# Usamos Nginx Unprivileged para seguridad (no corre como root)
# -----------------------------------------------------------------------------
FROM nginxinc/nginx-unprivileged:alpine-slim AS runner

# Metadatos del contenedor
LABEL maintainer="Andrey Vinajera Zamora <SSS-Consulting>"
LABEL description="Guía de Arquitectura Hexagonal - Frontend Production Build"

# Copiamos la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos ÚNICAMENTE los artefactos compilados desde el Stage 1 (Builder)
# Esto descarta node_modules y el código fuente, dejando una imagen minúscula.
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponemos el puerto 8080 (usado por nginx-unprivileged)
EXPOSE 8080

# El comando por defecto inicia Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]