import LogIn from "../LogIn/LogIn";
import Carrito from "../Carrito/Carrito";
import {Link} from "react-router-dom";


export default function NavBar() {
    const sinBorde = {border: 'none'}
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" style={sinBorde} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <Link to={'/'} className="navbar-brand me-5 ms-4">Bodegón</Link>
                    <ul className="navbar-nav ms-3">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link active">Inicio</Link>
                        </li>
                        <li className="nav-item dropdown" id="navbarNavDarkDropdown">
                            <a className="nav-link dropdown-toggle active" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Menú</a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link to={'/Categoria/Guarniciones'} className="dropdown-item">Guarniciones</Link></li>
                                <li><Link to={'/Categoria/Parrilla'} className="dropdown-item">Parrilla</Link></li>
                                <li><Link to={'/Categoria/Pastas'} className="dropdown-item">Pastas</Link></li>
                                <li><Link to={'/Categoria/Minutas'} className="dropdown-item">Minutas</Link></li>
                                <li><Link to={'/Categoria/Postres'} className="dropdown-item">Postres</Link></li>
                                <li><Link to={'/Categoria/Bebidas'} className="dropdown-item">Bebidas</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to={'/Promos'} className="nav-link active">Promos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/Reserva'} className="nav-link active">Reserva</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/Contacto'} className="nav-link active">Contacto</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <form className="d-inline p-2">
                        <Link to={'/LogIn'} className="btn btn-outline-light" type="submit">
                            Iniciar Sesión
                        </Link>
                    </form>
                    <form className="d-inline p-2">
                        <Link to={'/Carrito'} className="btn btn-outline-light" type="submit">
                            <i className="bi-cart-fill"></i>
                            <span className="badge bg-danger text-white ms-1 rounded-pill">0</span>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}