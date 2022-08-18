import { useState } from "react"
import { Link } from "react-router-dom"

export default function Registro() {
    const top = {paddingTop: '150px'}
    const ancho = {width: '600px'}
    function handleSumbit(event){event.preventDefault()}
    const [userRegistro, setUserRegistro] = useState({
        name: "",
        email : "",
        password: "",
        phone: "",
        address: ""
    })
    function inputChangeHandler(event) {
        
    }
    return (
        <main id="background">
            <div className="center" style={top}>
                <form onSubmit={handleSumbit} id="form" style={ancho}>
                    <h2 className="text-white center mt-4">Registrarse</h2>
                    <div>
                        <label htmlFor="name" className="form-label text-white"></label>
                        <input onChange={inputChangeHandler} type="text" name="name" className="form-control" placeholder="Nombre y Apellido"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label text-white"></label>
                        <input onChange={inputChangeHandler} type="email" name="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label text-white"></label>
                        <input onChange={inputChangeHandler} type="text" name="password" className="form-control" placeholder="Contraseña"/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="form-label text-white"></label>
                        <input onChange={inputChangeHandler} type="text" name="phone" className="form-control" placeholder="Teléfono"/>
                    </div>
                    <div>
                        <label htmlFor="address" className="form-label text-white"></label>
                        <input onChange={inputChangeHandler} type="text" name="address" className="form-control" placeholder="Domicilio"/>
                    </div>
                    <div className="center mb-4 mt-4">
                        <label htmlFor="submit" className="form-label"></label>
                        <input onChange={inputChangeHandler} type="submit" name="submit" className="btn btn-outline-light" value='Registrarse'/>
                    </div>
                </form>
            </div>
        </main>
    )
}


