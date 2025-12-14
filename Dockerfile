# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY eslint.config.js ./

# Installer les dépendances
RUN npm ci

# Copier le code source
COPY src ./src
COPY index.html ./
COPY public ./public

# Copier les assets dans public pour qu'ils soient servis statiquement
RUN cp -r src/assets public/

# Builder l'app
RUN npm run build

# Stage 2: Serveur
FROM node:20-alpine

WORKDIR /app

# Installer un serveur HTTP léger
RUN npm install -g serve

# Copier le build du stage précédent
COPY --from=builder /app/dist ./dist

# Copier la configuration serve dans dist
COPY serve.json ./dist/

# Exposer le port
EXPOSE 5173

# Démarrer le serveur avec la config
CMD ["serve", "-c", "serve.json", "-s", "dist", "-l", "5173"]
