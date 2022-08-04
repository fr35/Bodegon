import Contador from "../Contador/Contador"

export default function Oferta(props) {

    const imgSize = {height: "200px",}
    const badge = {top: '0.5rem', right: '0.5rem'}
    
    const total = props.data.price - (props.data.price * props.data.oferta) / 100

    return (
        <div className="col mb-5">
            <div className="card">
                <div className="badge bg-dark text-white position-absolute" style={badge}>{props.data.oferta}%</div>
                <img className="card-img-top" src={props.data.img} alt="..." style={imgSize}/>
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5>{props.data.nombre}</h5>
                        <h5>
                            <span className="text-muted text-decoration-line-through me-2">${props.data.price}</span>
                            <span className="fw-bolder">${total}</span>
                        </h5>
                        <Contador/>
                    </div>
                </div>
            </div>
        </div>
    )
}