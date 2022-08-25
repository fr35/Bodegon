import { useContext } from "react"
import { userAdressContext } from "../../context/UserAdressContext/userAdressContext"
import { userEmailContext } from "../../context/UserEmailContext/userEmailContext"
import { userNameContext } from "../../context/UserNameContext/userNameContext"
import { userPhoneContext } from "../../context/UserPhoneContext/userPhoneContext"


export default function Footer() {
    const link = {textDecoration: 'none', color: 'white'}
    const ul = {listStyleType: 'none', margin: '0', padding: '0'}
    const marginBottom = {marginBottom: '10px'}
    const {userEmail} = useContext(userEmailContext)
    const {userName} = useContext(userNameContext)
    const {userPhone} = useContext(userPhoneContext)
    const {userAdress} = useContext(userAdressContext)
    
    
    return (
        <footer className="bg-dark">
            <div className="container text-white">
                <div className="row text-center">
                    <div className="col mt-3">
                        <h5>Ubicación</h5>
                        <a href="https://goo.gl/maps/dJCcmaN1gZRptYac8" target="_blank" style={link}>
                            <p className="mt-1">12 octubre 251<br/>Quilmes<br/>Buenos Aires<br/>Argentina</p>
                        </a>
                    </div>
                    <div className="col mt-3">
                        <h5>Horarios</h5>
                        <ul style={ul}>
                            <li>
                                <p style={marginBottom}>Lunes a Jueves 12 a 23</p>
                            </li>
                            <li>
                                <p style={marginBottom}>Viernes y Sabados 12 a 1</p>
                            </li>
                            <li>
                                <p>Domingos y Feriados 12 a 17</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col mt-3">
                        <h5>Contacto</h5>
                        <ul style={ul}>
                            <li>
                                <p style={marginBottom}><i className="bi bi-whatsapp me-1"></i>11 1234-5678</p>
                            </li>
                            <li>
                                <p style={marginBottom}><i className="bi bi-instagram me-1"></i>Bodegón</p>
                            </li>
                            <li>
                                <p><i className="bi bi-facebook me-1"></i>Bodegón</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
