import Carrito from "./Carrito/Carrito";
import OffCanvas from "./OffCanvas";
import Registro from "./Registro/Registro";


export default function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <OffCanvas></OffCanvas>
                <div>
                    <Registro></Registro>
                    <Carrito></Carrito>
                </div>
            </div>
        </nav>
    )
}