FROM node:26-alpine AS build
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g corepack@latest && corepack enable
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
