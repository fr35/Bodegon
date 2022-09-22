import {Link} from "react-router-dom";
import CartWidget from "../../widget/CartWidget";

export default function NavBar() {
    const sinBorde = {border: 'none'}
    return (
            <nav className="navbar navbar-expand-md fixed-top navbar-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" style={sinBorde} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <Link to={'/'} className="navbar-brand ms-4 text-white">Bodegón</Link>
                        <div className="navbar-nav">
                            <Link to={'/'} className="nav-link active text-white underline">Inicio</Link>
                            <div className="nav-item dropdown" role='button'>
                                <button className="nav-link dropdown-toggle active btn text-white underline" data-bs-toggle="dropdown" style={sinBorde}>Menú</button>
                                <div className="dropdown-menu dropdown-menu-dark">
                                    <Link to={'/Categoria/Guarniciones'} className="dropdown-item underline">Guarniciones</Link>
                                    <Link to={'/Categoria/Parrilla'} className="dropdown-item underline">Parrilla</Link>
                                    <Link to={'/Categoria/Pastas'} className="dropdown-item underline">Pastas</Link>
                                    <Link to={'/Categoria/Minutas'} className="dropdown-item underline">Minutas</Link>
                                    <Link to={'/Categoria/Postres'} className="dropdown-item underline">Postres</Link>
                                    <Link to={'/Categoria/Bebidas'} className="dropdown-item underline">Bebidas</Link>
                                </div>
                            </div>
                            <Link to={'/Promos'} className="nav-link active text-white underline">Promos</Link>
                            <Link to={'/Reserva'} className="nav-link active text-white underline">Reserva</Link>
                            <Link to={'/Contacto'} className="nav-link active text-white underline">Contacto</Link>
                        </div>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
    )
}