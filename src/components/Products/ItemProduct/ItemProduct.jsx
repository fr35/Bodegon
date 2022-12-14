import { Link } from "react-router-dom"
import Btn from "../../Btn/Btn"

export default function ItemProduct({id,nombre, precio, img, promo, categoria}) {
    const cardSize = {width: '400px', height: '100%', position: 'relative'}
    const imgSize = {height: '300px',background: 'none', width: '100%'}
    const badge ={top: '10px', right: '10px'}
    const total = Math.abs(precio * promo / 100 - precio)
    const boton = {background: 'none'}
    const backgroundNone = {background: 'none'}

    return (
        <div className="col col-lg-4 col-md-6 mb-5 center">
            <div className="bg-dark" style={cardSize}>
                <img src={img} alt={nombre} style={imgSize}/>
                    <div className=" text-center bg-dark">
                        <h4 className="mt-3 text-white" style={backgroundNone}>{nombre}</h4>
                        {promo > 0 ? (  
                        <>
                            <div className="badge bg-danger text-white position-absolute" style={badge}>{promo}%</div>
                            <h4 className="mt-1 text-white" style={backgroundNone}>
                                <span className="text-muted text-decoration-line-through me-2" style={backgroundNone}>${precio}</span>
                            ${total}
                            </h4>
                        </>
                        ) : (
                        <h4 className="mt-1 text-white" style={backgroundNone}>${precio}</h4>
                        )}
                        <Link to={`/${categoria}/${id}`} className="mt-2 mb-3" style={boton}>
                            <Btn text={'Ver más'}/>
                        </Link>
                    </div>
            </div>
        </div>
    )
}