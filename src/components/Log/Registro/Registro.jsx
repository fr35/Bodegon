import { useContext } from "react"
import { userEmailContext } from "../../../context/UserEmailContext/userEmailContext"
import { userPasswordContext } from "../../../context/UserPasswordContext/userPasswordContext"
import { userNameContext } from "../../../context/UserNameContext/userNameContext"
import { userPhoneContext } from "../../../context/UserPhoneContext/userPhoneContext"
import { userAdressContext } from "../../../context/UserAdressContext/userAdressContext"

export default function Registro() {
    const top = {paddingTop: '150px'}
    const ancho = {width: '600px'}
    const {userEmail,setUserEmail} = useContext(userEmailContext)
    const {userPassword, setUserPassword} = useContext(userPasswordContext)
    const {userName,setUserName} = useContext(userNameContext)
    const {userPhone, setUserPhone} = useContext(userPhoneContext)
    const {userAdress,setUserAdress} = useContext(userAdressContext)
    function handleSumbit(event){
        event.preventDefault()
        let userAuth = true
        let userInputEmail = event.target.elements[1].value
        setUserEmail(userInputEmail)
        let userInputPassword = event.target.elements[2].value
        setUserPassword(userInputPassword)
        let userInputName = event.target.elements[0].value
        setUserName(userInputName)
        let userInputPhone = event.target.elements[3].value
        setUserPhone(userInputPhone)
        let userInputAdress = event.target.elements[4].value
        setUserAdress(userInputAdress)
    }
    return (
        <main id="background">
            <div className="center" style={top}>
                <form onSubmit={handleSumbit} id="form" style={ancho}>
                    <h2 className="text-white center mt-4">Registrarse</h2>
                    <div>
                        <label htmlFor="name" className="form-label text-white"></label>
                        <input type="text" name="name" className="form-control" placeholder="Nombre y Apellido"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label text-white"></label>
                        <input type="email" name="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label text-white"></label>
                        <input type="password" name="password" className="form-control" placeholder="Contraseña"/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="form-label text-white"></label>
                        <input type="text" name="phone" className="form-control" placeholder="Teléfono"/>
                    </div>
                    <div>
                        <label htmlFor="address" className="form-label text-white"></label>
                        <input type="text" name="address" className="form-control" placeholder="Domicilio"/>
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


