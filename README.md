# AnimaLandia

AnimaLandia es una aplicación web CRUD para registrar y administrar animales. Permite agregar, listar, buscar, editar y eliminar registros.

## Tecnologías

- React
- React Router
- Axios
- Bootstrap
- SweetAlert2
- Flask
- Flask-CORS
- MySQL

## Arquitectura

El proyecto está dividido en frontend y backend:

- `animales/`: interfaz desarrollada con React.
- `servidor/app.py`: API REST desarrollada con Flask.
- `animales.sql`: script para crear la base de datos y la tabla.

React se comunica con Flask mediante solicitudes HTTP y Flask consulta los datos almacenados en MySQL.

## Requisitos

- Python 3
- Node.js y npm
- MySQL

## Configuración de la base de datos

Ejecuta el archivo `animales.sql` desde MySQL Workbench o desde la terminal:

```bash
mysql -u root -p < animales.sql
```

Luego configura la conexión a MySQL en `servidor/app.py`:

```python
host="localhost",
user="root",
password="TU_CONTRASENA",
database="animales"
```

## Ejecutar el proyecto

### Backend

Desde la carpeta principal:

```bash
cd servidor
python -m pip install Flask flask-cors mysql-connector-python
python app.py
```

El servidor estará disponible en `http://localhost:5000`.

### Frontend

Abre otra terminal desde la carpeta principal:

```bash
cd animales
npm install
npm start
```

La aplicación estará disponible en `http://localhost:3000`.

## API

| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | `/listaAnimales` | Lista todos los animales |
| POST | `/nuevoAnimal` | Agrega un animal |
| GET | `/buscarxid/<id>` | Busca un animal por ID |
| PUT | `/actualizarAnimal/<id>` | Actualiza un animal |
| DELETE | `/borrarAnimal/<id>` | Elimina un animal |

Ejemplo del cuerpo para crear o actualizar un animal:

```json
{
  "especie": "Perro"
}
```
