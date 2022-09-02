import { Link } from "react-router-dom"

export default function LogIn() {
    const img = {maxHeight: '100vh', minHeight: '100vh', width: '100%'}
    return (
        <main>
                <div className="center">
                    <img src="fotos/bodegon.jpeg" alt="background" style={img}></img>
                    <form id="form" className="position-absolute">
                        <h2 className="text-white text-center mt-4">Iniciar Sesión</h2>
                        <div>
                            <label htmlFor="email" className="form-label text-white"></label>
                            <input  className="form-control" 
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            required/>
                        </div>
                        <div>
                            <label htmlFor="password" className="form-label text-white"></label>
                            <input className="form-control" 
                            type="password" 
                            name="password" 
                            placeholder="Contraseña"
                            required/>
                        </div>
                        <div className="text-center mb-3 mt-4">
                            <button type="submit" className="btn btn-outline-light">Ingresar</button>
                        </div>
                            <p className="text-white mb-4">Si no tienes una cuenta, haz click aquí para <Link to={'/LogIn/Registro'}>Registrarte</Link></p>
                    </form>
                </div>
        </main>
    )
}

