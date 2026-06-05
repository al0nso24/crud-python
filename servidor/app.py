from flask import Flask, request, jsonify
from flask_cors import CORS
from contextlib import contextmanager
import mysql.connector

# Permite que React se comunique con este servidor.
app = Flask(__name__)
CORS(app)

def get_Connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="alonso_24122005_",
        database="animales"
    )



#Abre la conexión, la usa y finalmente la cierra automáticamente.
@contextmanager
def get_Cursor(dictionary = False):
    conn = get_Connection()
    cursor = conn.cursor(dictionary=dictionary)
    try:
        yield cursor
        conn.commit() #Guarda los cambios en la base de datos.
    finally:
        conn.close() #Cierra la conexión a la base de datos.



#Lista de animales (GET):
@app.route("/listaAnimales", methods=["GET"])
def get_Animales():
    with get_Cursor(dictionary=True) as cursor:
        cursor.execute("SELECT * FROM animal")
        animales = cursor.fetchall() #fetchall() trae toda la fila.
        return jsonify(animales)



#Agregar un nuevo animal (POST):
@app.route("/nuevoAnimal", methods=["POST"])
def agregar_Animal():
    data = request.get_json()
    especie = data.get("especie")
    with get_Cursor() as cursor:
        cursor.execute("INSERT INTO animal (especie) VALUES(%s)", (especie,))
        return jsonify({"mensaje": 'Animal agregado correctamente'}), 201
    


#Borrar un animal (DELETE):
@app.route("/borrarAnimal/<int:id>", methods=["DELETE"])
def borrar_Animal(id): #Los animales se borran en base al id.
    with get_Cursor() as cursor:
        cursor.execute("DELETE FROM animal WHERE id = %s", (id,))
        return jsonify({"mensaje": "Animal eliminado correctamente."})



#Actualizar un animal (PUT):
@app.route("/actualizarAnimal/<int:id>", methods=["PUT"])
def actualizar_Animal(id):
    data = request.get_json()
    nueva_especie = data.get("especie")
    with get_Cursor() as cursor:
        cursor.execute("UPDATE animal SET especie = %s WHERE id = %s", (nueva_especie, id))
        return jsonify({"mensaje": "Información del animal actualizada correctamente."})



#Buscar una animal por su id (GET):
@app.route("/buscarxid/<int:id>", methods=["GET"])
def buscar_Animal(id):
    with get_Cursor(dictionary=True) as cursor:
        cursor.execute("SELECT * FROM animal WHERE id = %s", (id,))
        animal = cursor.fetchall()
        return jsonify(animal)


#Arrancar el servidor:
if __name__ == "__main__":
    print("Servidor corriendo.")
    app.run(debug=True, port=5000)