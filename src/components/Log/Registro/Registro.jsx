import { useContext } from "react"
import { userDataContext } from "../../../context/UserContext/userContext"

export default function Registro() {
    const top = {paddingTop: '150px'}
    const ancho = {width: '600px'}
    const {userName, setUserName, userEmail, setUserEmail, userPassword, setUserPassword, userPhone, setUserPhone, userAdress, setUserAdress} = useContext(userDataContext)
    function handleSumbit(event){
        event.preventDefault()
        let userAuth = true   
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
        <main id="background">
            <div className="center" style={top}>
                <form onSubmit={handleSumbit} id="form" style={ancho}>
                    <h2 className="text-white center mt-4">Registrarse</h2>
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
                    <div className="center mb-4 mt-4">
                        <label htmlFor="submit" className="form-label"></label>
                        <input type="submit" name="submit" className="btn btn-outline-light" value='Registrarse'/>
                    </div>
                </form>
            </div>
        </main>
    )
}


