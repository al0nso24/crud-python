import { useState, useEffect } from "react"
import Axios from "axios"
import Swal from 'sweetalert2'

export default function GestionAnimales() {

    const [id, setId] = useState(0);
    const [especie, setEspecie] = useState("");

    const [lista, setLista] = useState([]);
    const [existe, setExiste] = useState(false);


    //Para actualizar el datos del animal:
    const [actualizar, setActualizar] = useState(false);


    //Lista de animales:
    const getAnimales = () => {
        Axios.get("http://localhost:5000/listaAnimales").then((res) => {
            setLista(res.data);
            setExiste(true);
        })
    }


    //Actualiza la lista automáticamente y la hace visible al cargar la página
    useEffect(() => {
        getAnimales();
    }, []);


    //Agregar animales:
    const agregarAnimal = (e) => {
        e.preventDefault(); //Evita que se recargue la página al enviar el formulario.
        Axios.post("http://localhost:5000/nuevoAnimal", { especie: especie }).then((res) => {
            getAnimales();
            limpiarCampos();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Animal agregado exitosamente!",
                showConfirmButton: false,
                timer: 1500
            });
        })
    }


    //Eliminar animales:
    const eliminarAnimal = (id) =>{
        Swal.fire({
            title: "Estás seguro?",
            text: "Eliminar registro de animal",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed){
                Axios.delete(`http://localhost:5000/borrarAnimal/${id}`).then((res) => {
                    getAnimales();
                })
                Swal.fire({
                    title: "Borrado!",
                    icon: "success"
                })
            };
        });
    }


    //Recupera los datos del animal para mostrarlo en el input y luego actualizarlo:
    const recuperarAnimal = (a) => {
        setId(a.id);
        setEspecie(a.especie);
        setActualizar(true);
    }


    //Actualizar animales:
    const actualizarAnimal = (id) => {
        Axios.put(`http://localhost:5000/actualizarAnimal/${id}`, {especie:especie}).then((res)=>{
            getAnimales();
            limpiarCampos();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Datos actualizados!",
                showConfirmButton: false,
                timer: 1500
            });
        })
    }


    //Limpia el input:
    const limpiarCampos = () => {
        setEspecie("");
        setActualizar(false);
    }



    return (
        <div>
            <div className="container mt-5">
                <div className="row mb-5 d-flex justify-content-center">
                    <div className="col-12 col-md-3 col-xl-3 col-lg-3">
                        <div class="card">
                            <div class="card-body">
                                <form onSubmit={agregarAnimal}>
                                    <div className="form-group">
                                        <label className="form-label">Nombre del animal:</label>
                                        <input type="text" value={especie} onChange={(e) => setEspecie(e.target.value)} className="form-control" required></input>
                                    </div>
                                    {
                                        actualizar ? (
                                            <div className="d-flex gap-4 justify-content-center">
                                                <button onClick={() => actualizarAnimal(id)} type="button" className="btn btn-secondary mt-3">Editar</button>
                                                <button onClick={() => limpiarCampos()} type="button" className="btn btn-danger mt-3">Cancelar</button>
                                            </div>
                                        ):
                                        <button type="submit" className="btn btn-success mt-3 w-100">
                                            Agregar
                                        </button>
                                    }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                        {
                            lista.length > 0 ? (
                                <table className="table table-striped">
                                    <thead className="table-dark">
                                        <tr className="text-center">
                                            <th>ID</th>
                                            <th>Especie</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        {
                                            lista.map((a, key) => (
                                                <tr key={a.id}>
                                                    <td>{a.id}</td>
                                                    <td>{a.especie}</td>
                                                    <td>
                                                        <div className="d-flex gap-3 justify-content-center">
                                                            <button onClick={() => eliminarAnimal(a.id)} className="btn btn-danger">Eliminar</button>
                                                            <button onClick={() => recuperarAnimal(a)} className="btn btn-secondary">Editar</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            ) : (
                                existe && (
                                    <p>Aún no hay animales registrados en esta lista 😭</p>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}