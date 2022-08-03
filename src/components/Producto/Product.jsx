import Contador from "../Contador/Contador"

export default function Producto( props ) {
    const imgSize = {height: "200px",}
    
    return (
        <div className="col mb-5">
            <div className="card">
                <img className="card-img-top" src={props.data.img} alt="..." style={imgSize}/>
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5>{props.data.nombre}</h5>
                        <h5>${props.data.precio}</h5>
                        <Contador stock={props.data.stock}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
