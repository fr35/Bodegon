import { Link } from "react-router-dom"


export default function LogIn() {
    const top = {paddingTop: '150px'}
    const ancho = {width: '600px'}
    return (
        <main id="background">
            <div className="center" style={top}>
                <form id="form" style={ancho}>
                    <h2 className="text-white center mt-4">Iniciar Sesión</h2>
                    <div className="">
                        <label htmlFor="email" className="form-label text-white"></label>
                        <input  className="form-control" 
                        type="email" 
                        name="email" 
                        placeholder="Email"/>
                    </div>
                    <div className="">
                        <label htmlFor="password" className="form-label text-white"></label>
                        <input className="form-control" 
                        type="password" 
                        name="password" 
                        placeholder="Contraseña"/>
                    </div>
                    <div className="center mb-3 mt-4">
                        <button type="submit" className="btn btn-outline-light">Ingresar</button>
                    </div>
                        <p className="text-white mb-4">Si no tienes una cuenta, haz click aquí para <Link to={'/LogIn/Registro'}>Registrarte</Link></p>
                </form>
            </div>
        </main>
    )
}

