import { Link } from "react-router-dom";
import Contador from "../Contador/Contador";

export default function ItemDetail({data}) {
    const marginTop = {marginTop: '100px'}
    const link = {marginRight: '20px', textDecoration: 'none', }
    const hr = {margin: '0rem'}
    return (
        <section className="container" style={marginTop}>
            <div className="d-flex me-5">
                <Link to={'/'} className='me-4 fst-italic text-decoration-none text-secondary'>
                    <h6>Home</h6>
                </Link>
                <Link to={`/Categoria/${data.categoria}`} style={link}>
                    <h6 className="fst-italic text-decoration-none text-secondary">{data.categoria}</h6>
                </Link>
            </div>
            <hr style={hr}/>
            <div className="row d-md-flex d-block mt-4">
                <div className="col center">
                    <img src={data.img} alt={data.img} className='w-100 h-100'></img>
                </div>
                <div className="col mt-1">
                    <h2 className="center fw-bolder">{data.nombre}</h2>
                    <p className="mt-3 center text-black-50">{data.descripción}</p>
                    <h4 className="center fw-bolder">${data.precio}</h4>
                    <Contador stock={data.stock}/>
                    <div className="center"><button className="btn btn-outline-dark">Agregar al Carrito</button></div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label"></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comentarios..."></textarea>
                    </div>
                </div>
            </div>
        </section>
    )
}