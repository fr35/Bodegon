import { useContext } from "react";
import { Link } from "react-router-dom";
import { userDataContext } from "../../context/UserContext/userContext"

export default function LogWidget() {
    const sinBorde = {border: 'none'}
    const {userName, setUserName, setUserEmail, setUserPassword, setUserPhone, setUserAdress} = useContext(userDataContext)
    function cerrarSesión() {
        setUserName('')
        setUserEmail('')
        setUserPassword('')
        setUserPhone('')
        setUserAdress('')
    }
    return (
        (userName === "") ? (
            <Link to={'/LogIn'} className='btn text-white' style={sinBorde}>Iniciar Sesión</Link>
        ) : (
            <div className="dropdown">
                <button className="btn dropdown-toggle text-white" data-bs-toggle="dropdown" style={sinBorde}>
                    <i className="bi bi-person-circle"></i>
                </button>
                <ul className="dropdown-menu">
                    <Link to={'/LogIn/Registro'} className="dropdown-item">Ajustes</Link>
                    <button className="dropdown-item" onClick={()=>cerrarSesión()}>Cerrar Sesión</button>
                </ul>
            </div>
        )
    )
}