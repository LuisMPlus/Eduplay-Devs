# Backend Server con TypeScript

Proyecto backend con Express y TypeScript sin ORM.

## Instalación

```bash
npm install
```

## Configuración

1. Copia el archivo `.env.example` a `.env`:
```bash
cp .env.example .env
```

2. Ajusta las variables de entorno en `.env` según sea necesario.

## Scripts disponibles

- `npm run dev` - Ejecutar en modo desarrollo con hot-reload
- `npm run build` - Compilar TypeScript a JavaScript
- `npm start` - Ejecutar servidor en producción (requiere compilación previa)
- `npm run lint` - Verificar código con ESLint
- `npm run format` - Formatear código con Prettier

## Estructura del proyecto

```
src/
├── config/         # Configuración de la aplicación
├── controllers/    # Lógica de negocio
├── middlewares/    # Middlewares personalizados
├── routes/         # Definición de rutas
├── types/          # Tipos e interfaces TypeScript
└── index.ts        # Punto de entrada
```

## Endpoints disponibles

### Health Check
- `GET /health` - Verificar estado del servidor

### Usuarios
- `GET /api/users` - Obtener todos los usuarios
- `GET /api/users/:id` - Obtener usuario por ID
- `POST /api/users` - Crear nuevo usuario
- `PUT /api/users/:id` - Actualizar usuario
- `DELETE /api/users/:id` - Eliminar usuario

## Desarrollo

El servidor se ejecutará en `http://localhost:3000` por defecto.
