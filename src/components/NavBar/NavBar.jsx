import OffCanvas from "../OffCanvas/OffCanvas";
import LogIn from "../LogIn/LogIn";
import Carrito from "../Carrito/Carrito";


export default function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <OffCanvas/>
                <div>
                    <LogIn/>
                    <Carrito/>
                </div>
            </div>
        </nav>
    )
}