<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```SHELL
pnpm install
```

3. Tener Nest CLI instalado

```SHELL
pnpm add -g @nestjs/cli
```

4. Levantar la base de datos

```SHELL
docker compose up -d
```

5. Clonar el archivo **.env.template** y renombrar la copia a **.env**

6. Llenar las variables de entorno definidas en el `.env`

7. Ejecutar la aplicación en dev:

```SHELL
pnpm start:dev
```

8. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```

## Stack usado

- MongoDB

- Nest

# Production build

1. Crear el archivo `.env.prod`

2. Llenar las variables de entorno de prod

3. Crear la nueva imagen

```SHELL
docker compose -f docker-compose.prod.yml --env-file .env.prod up --build
```
