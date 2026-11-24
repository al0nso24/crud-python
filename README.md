# AnimaLandia

Aplicación web sencilla para administrar animales: permite registrarlos, ver la lista, editar o eliminar registros y buscar un animal por su ID. Está compuesta por una interfaz en React, una API en Flask y una base de datos MySQL.

## Estructura

```text
.
├── animales/             # Interfaz React
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── Busqueda.jsx
│       ├── GestionAnimales.jsx
│       └── Menu.jsx
├── servidor/
│   └── app.py            # API Flask
└── animales.sql          # Creación de la base de datos y la tabla
```

La tabla `animal` tiene un `id` autoincremental y una `especie`.

## Requisitos

- Python y pip
- Node.js y npm
- MySQL

## Configuración y ejecución

### 1. Preparar MySQL

Ejecuta `animales.sql` en MySQL. El script crea y selecciona la base de datos `animales`, crea la tabla `animal` y consulta su contenido.

La conexión está configurada directamente en `servidor/app.py`, dentro de `get_Connection()`. Antes de ejecutar la API, ajusta allí el host, usuario, contraseña y base de datos para que coincidan con tu instalación local. La configuración actual usa MySQL en `localhost` y la base de datos `animales`; no publiques credenciales.

### 2. Iniciar la API

En una terminal, instala las dependencias de Python que usa el servidor e inicia Flask:

```bash
cd servidor
python -m pip install Flask Flask-Cors mysql-connector-python
python app.py
```

La API escucha en el puerto `5000`.

### 3. Iniciar la interfaz

En otra terminal, instala las dependencias e inicia React:

```bash
cd animales
npm install
npm start
```

La interfaz usa `http://localhost:5000` para comunicarse con la API. Con la configuración habitual de Create React App, estará disponible en `http://localhost:3000`.

## Operaciones de la API

| Método | Ruta | Operación |
| --- | --- | --- |
| `GET` | `/listaAnimales` | Lista los animales |
| `POST` | `/nuevoAnimal` | Agrega un animal; recibe `especie` en JSON |
| `PUT` | `/actualizarAnimal/<id>` | Actualiza la `especie` del animal |
| `DELETE` | `/borrarAnimal/<id>` | Elimina el animal |
| `GET` | `/buscarxid/<id>` | Busca animales por ID |

## Pruebas y compilación de la interfaz

Desde `animales/`:

```bash
npm test
npm run build
```

El servidor Flask está configurado con el modo de depuración activado; úsalo para desarrollo local, no como configuración de producción.
