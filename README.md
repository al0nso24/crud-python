# AnimaLandia

Aplicación web CRUD para registrar, consultar, editar y eliminar animales. El proyecto utiliza React en el frontend, Flask en el backend y MySQL como base de datos.

## Características

- Registrar animales con su especie o nombre
- Mostrar el listado completo de registros
- Buscar un animal por su ID
- Editar y eliminar registros
- Confirmaciones visuales con SweetAlert2
- Comunicación frontend-backend mediante API REST

## Tecnologías

| Parte | Tecnología |
| --- | --- |
| Frontend | React 19, React Router, Axios, Bootstrap, SweetAlert2 |
| Backend | Python, Flask, Flask-CORS |
| Base de datos | MySQL |
| Ejecución local | npm y Python |

## Estructura del proyecto

```text
.
├── animales/             # Aplicación React
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

La tabla `animal` contiene:

| Columna | Tipo | Descripción |
| --- | --- | --- |
| `id` | `INT`, llave primaria, autoincremental | Identificador del animal |
| `especie` | `VARCHAR(50)`, obligatoria | Nombre o especie del animal |

## Requisitos previos

- Python 3 y `pip`
- Node.js y npm
- Servidor MySQL activo

## Instalación y ejecución

### 1. Crear la base de datos

Abre MySQL Workbench, MySQL CLI o tu gestor preferido y ejecuta:

```bash
mysql -u root -p < animales.sql
```

El script crea la base de datos `animales` y la tabla `animal`.

### 2. Configurar la conexión

En `servidor/app.py`, ajusta los valores de `get_Connection()` según tu instalación de MySQL:

```python
host="localhost",
user="root",
password="TU_CONTRASENA",
database="animales"
```

No subas contraseñas reales al repositorio ni compartas el archivo con credenciales personales.

### 3. Iniciar el servidor Flask

Desde una terminal, dentro de la raíz del proyecto:

```powershell
cd servidor
python -m pip install Flask flask-cors mysql-connector-python
python app.py
```

La API quedará disponible en `http://localhost:5000`.

### 4. Iniciar la aplicación React

Abre una segunda terminal, dentro de la raíz del proyecto:

```powershell
cd animales
npm install
npm start
```

Abre `http://localhost:3000` en el navegador.

Mantén ejecutándose simultáneamente la API de Flask y la interfaz de React.

## API REST

URL base: `http://localhost:5000`

| Método | Ruta | Cuerpo JSON | Resultado |
| --- | --- | --- | --- |
| `GET` | `/listaAnimales` | - | Lista todos los animales |
| `POST` | `/nuevoAnimal` | `{"especie": "Perro"}` | Agrega un animal |
| `PUT` | `/actualizarAnimal/<id>` | `{"especie": "Gato"}` | Actualiza un animal |
| `DELETE` | `/borrarAnimal/<id>` | - | Elimina un animal |
| `GET` | `/buscarxid/<id>` | - | Busca un animal por ID |

Ejemplo para agregar un registro desde PowerShell:

```powershell
Invoke-RestMethod `
  -Uri "http://localhost:5000/nuevoAnimal" `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"especie":"Perro"}'
```

## Comandos útiles

### Frontend

Desde `animales/`:

```powershell
npm start        # Ejecuta el servidor de desarrollo
npm test         # Ejecuta las pruebas
npm run build    # Genera una compilación de producción
```

### Backend

Desde `servidor/`:

```powershell
python app.py
```

## Solución de problemas

- **El frontend no obtiene datos:** verifica que Flask esté activo en el puerto `5000` y que no haya errores de conexión.
- **Error de acceso a MySQL:** confirma el usuario, contraseña y servidor configurados en `servidor/app.py`.
- **La base de datos no existe:** vuelve a ejecutar `animales.sql`.
- **Puerto ocupado:** detén el proceso que usa el puerto o modifica el puerto en `app.py` y las URL de Axios del frontend.
- **Modo de depuración:** Flask está configurado con `debug=True`; úsalo únicamente en desarrollo local.
