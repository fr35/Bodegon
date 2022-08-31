import {Link} from "react-router-dom";
import CartWidget from "../../widget/CartWidget";
import LogWidget from "../../widget/LogWidget";

export default function NavBar() {
    const sinBorde = {border: 'none'}
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" style={sinBorde} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <Link to={'/'} className="navbar-brand ms-4">Bodegón</Link>
                    <div className="navbar-nav">
                        <Link to={'/'} className="nav-link active">Inicio</Link>
                        <div className="nav-item dropdown" role='button'>
                            <a className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Menú</a>
                            <div className="dropdown-menu dropdown-menu-dark">
                                <Link to={'/Categoria/Guarniciones'} className="dropdown-item ">Guarniciones</Link>
                                <Link to={'/Categoria/Parrilla'} className="dropdown-item">Parrilla</Link>
                                <Link to={'/Categoria/Pastas'} className="dropdown-item">Pastas</Link>
                                <Link to={'/Categoria/Minutas'} className="dropdown-item">Minutas</Link>
                                <Link to={'/Categoria/Postres'} className="dropdown-item">Postres</Link>
                                <Link to={'/Categoria/Bebidas'} className="dropdown-item">Bebidas</Link>
                            </div>
                        </div>
                        <Link to={'/Promos'} className="nav-link active">Promos</Link>
                        <Link to={'/Reserva'} className="nav-link active">Reserva</Link>
                        <Link to={'/Contacto'} className="nav-link active">Contacto</Link>
                    </div>
                </div>
                <div className="d-flex me-3">
                    <LogWidget/>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}