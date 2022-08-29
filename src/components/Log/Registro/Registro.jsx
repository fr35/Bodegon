import { useState } from "react"

export default function Registro() {
    const top = {paddingTop: '150px'}
    const ancho = {width: '600px'}
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        adress: "",
    })
    function handleSumbit(event){
        event.preventDefault()
        let userAuth = true   
    }
    function inputChangeHandler(evt) {
        const input = evt.target;
        const value = input.value;
        const inputName = input.name;
        let copyUserData = { ...userData };
        copyUserData[inputName] = value;
        setUserData(copyUserData);
    }
    return (
        <main id="background">
            <div className="center" style={top}>
                <form onSubmit={handleSumbit} id="form" style={ancho}>
                    <h2 className="text-white center mt-4">Registrarse</h2>
                    <div>
                        <label htmlFor="name" className="form-label text-white"></label>
                        <input 
                        value={userData.name}
                        onChange={inputChangeHandler}
                        type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="Nombre y Apellido"
                        required/>
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label text-white"></label>
                        <input 
                        value={userData.email}
                        onChange={inputChangeHandler}
                        type="email" 
                        name="email" 
                        className="form-control" 
                        placeholder="Email"
                        required/>
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label text-white"></label>
                        <input 
                        value={userData.password}
                        onChange={inputChangeHandler}
                        type="password" 
                        name="password" 
                        className="form-control" 
                        placeholder="Contraseña"
                        required/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="form-label text-white"></label>
                        <input 
                        value={userData.phone}
                        onChange={inputChangeHandler}
                        type="text" 
                        name="phone" 
                        className="form-control" 
                        placeholder="Teléfono"
                        required/>
                    </div>
                    <div>
                        <label htmlFor="address" className="form-label text-white"></label>
                        <input 
                        value={userData.adress}
                        onChange={inputChangeHandler}
                        type="text" 
                        name="address" 
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


