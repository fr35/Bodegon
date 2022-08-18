import { useState } from "react"
import { Link } from "react-router-dom"

export default function LogIn() {
    
    const top = {paddingTop: '150px'}
    const ancho = {width: '600px'}
    function handleSumbit(event){event.preventDefault()}
    const [userData, setUserData] = useState({
        email : "",
        password: "",
    })
    function inputChangeHandler(event) {

    }
    return (
        <main id="background">
            <div className="center" style={top}>
                <form onSubmit={handleSumbit} id="form" style={ancho}>
                    <h2 className="text-white center mt-4">Iniciar Sesión</h2>
                    <div className="">
                        <label htmlFor="email" className="form-label text-white"></label>
                        <input onChange={inputChangeHandler} type="email" name="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="">
                        <label htmlFor="password" className="form-label text-white"></label>
                        <input onChange={inputChangeHandler} type="text" name="password" className="form-control" placeholder="Contraseña"/>
                    </div>
                    <div className="center mb-3 mt-4">
                        <label htmlFor="submit" className="form-label"></label>
                        <input onChange={inputChangeHandler} type="submit" name="submit" className="btn btn-outline-light" value='Ingresar'/>
                    </div>
                        <p className="text-white mb-4">Si no tienes una cuenta, haz click aquí para <Link to={'/LogIn/Registro'}>Registrarte</Link></p>
                </form>
            </div>
        </main>
    )
}

