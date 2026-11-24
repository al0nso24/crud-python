# Frontend de AnimaLandia

Interfaz React para administrar animales mediante la API de Flask.

## Requisitos

- Node.js
- npm
- API disponible en `http://localhost:5000`

## Ejecutar

Desde este directorio:

```powershell
npm install
npm start
```

La aplicación estará disponible en `http://localhost:3000`.

## Scripts

```powershell
npm start        # Desarrollo
npm test         # Pruebas
npm run build    # Compilación de producción
```

Las rutas principales son `/` para gestionar animales y `/buscar` para buscar por ID.

Para la instalación completa de MySQL y Flask, consulta el [README principal](../README.md).
