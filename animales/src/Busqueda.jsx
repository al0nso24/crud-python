import { useState } from "react";
import Axios from 'axios'

export default function Busqueda(){

    const [id, setId] = useState(0);
    const [existe, setExiste] = useState(false);

    const [listaAnimal, setListaAnimal] = useState([]);


    const buscar = (e) => {
        e.preventDefault();
        Axios.get(`http://localhost:5000/buscarxid/${id}`).then((res)=>{
            setListaAnimal(res.data);
            setExiste(true);
        })
    }

    return(
        <div>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-3 col-lg-3 col-xl-3">
                        <div class="card">
                            <div class="card-body">
                                <form onSubmit={buscar}>
                                    <div className="form-group">
                                        <label className="form-label">Coloca el ID del animal (solo número):</label>
                                        <input value={id} onChange={(a) => setId(a.target.value)} type="number" min={0} className="form-control"></input>
                                    </div>
                                    <button type="submit" className="btn btn-success mt-3 ">Buscar animal</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    {
                        listaAnimal.length > 0 ? (
                            <table className="table table-striped">
                                <thead className="table-dark">
                                    <tr className="text-center">
                                        <th>ID</th>
                                        <th>Especie</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {
                                        listaAnimal.map((a, index)=>(
                                            <tr key={a.id}>
                                                <td>{a.id}</td>
                                                <td>{a.especie}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        ):(
                            existe && (
                                <p>Coloca bien el ID del animal 😭</p>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}