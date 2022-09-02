import { useContext } from "react"
import { userDataContext } from "../../../context/UserContext/userContext"
import { Link } from "react-router-dom"

export default function Registro() {
    const img = {maxHeight: '100vh', minHeight: '100vh', width: '100%'}
    const {setUserName, setUserEmail, setUserPassword, setUserPhone, setUserAdress} = useContext(userDataContext)
    function handleSumbit(event){
        event.preventDefault()
        let userName = event.target.elements[0].value
        setUserName(userName)
        let userEmail = event.target.elements[1].value
        setUserEmail(userEmail)
        let userPassword = event.target.elements[2].value
        setUserPassword(userPassword)
        let userPhone = event.target.elements[3].value
        setUserPhone(userPhone)
        let userAdress = event.target.elements[4].value
        setUserAdress(userAdress)
        
    }
    
    return (
        <main>
            <div className="center">
                <img src="../fotos/bodegon.jpeg" alt="background" style={img}></img>
                <form onSubmit={handleSumbit} id="form" className="position-absolute mt-2">
                    <h2 className="text-white center mt-2">Registrarse</h2>
                    <div>
                        <label htmlFor="name" className="form-label text-white"></label>
                        <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="Nombre y Apellido"
                        required/>
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label text-white"></label>
                        <input 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        placeholder="Email"
                        required/>
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label text-white"></label>
                        <input 
                        type="password" 
                        name="password" 
                        className="form-control" 
                        placeholder="Contraseña"
                        required/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="form-label text-white"></label>
                        <input 
                        type="text" 
                        name="phone" 
                        className="form-control" 
                        placeholder="Teléfono"
                        required/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="form-label text-white"></label>
                        <input 
                        type="text" 
                        name="adress" 
                        className="form-control" 
                        placeholder="Domicilio"
                        required/>
                    </div>
                    <div className="center mb-4 mt-2">
                        <label htmlFor="submit" className="form-label"></label>
                        <input type="submit" name="submit" className="btn btn-outline-light" value='Registrarse'/>
                    </div>
                    <p className="text-white mb-4">Si ya tienes una cuenta, haz click aquí para <Link to={'/LogIn'}>Iniciar Sesión</Link></p>
                </form>
            </div>
        </main>
    )
}


