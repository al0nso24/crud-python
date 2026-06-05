import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav class="navbar navbar-expand-lg bg-success">
            <div class="container-fluid">
                <Link class="navbar-brand fs-4 fw-bold text-white" to="/">🐸 AnimaLandia</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <Link class="nav-link text-white d-flex" to="/buscar">Buscar animal 📝</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}