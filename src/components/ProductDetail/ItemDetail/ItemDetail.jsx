import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../../context/cartContext";
import Btn from "../../Btn/Btn";
import Contador from "../Contador/Contador";


export default function ItemDetail({id,nombre, precio, img, stock, promo, descripción, url, categoria, precioTotal}) {
    const margin = {marginTop: '100px', marginBottom: '170px'}
    const imgStyle = {maxHeigth: '300px', width: '100%'}
    const link = {textDecoration: 'none'}
    const hayPromo = promo !== undefined
    const precioPromo = Math.abs(precio * promo / 100 - precio)
    const {addToCart, isInCart} = useContext(cartContext)
    function handleAdd(cantidad) {
        if (hayPromo) {
            precioTotal = precioPromo * cantidad
        } else (
            precioTotal = precio * cantidad
        )
        const itemToCart = {id,nombre, precio, img, stock, promo, descripción, url, categoria, precioPromo, cantidad, precioTotal}
        addToCart(itemToCart, cantidad, precioTotal)
    }

    return (
        <section className="container text-white" style={margin}>
            <div className="d-flex me-5">
                <Link to={'/'} className='me-4 fst-italic text-decoration-none text-secondary'>
                    <h6>Home</h6>
                </Link>
                <Link to={`/Categoria/${categoria}`} style={link}>
                    <h6 className="fst-italic text-decoration-none text-secondary">{categoria}</h6>
                </Link>
            </div>
            <hr className="m-0"/>
            <div className="row mt-3 d-md-flex d-block">
                <div className="col center">
                    <img src={img} alt={img} className='rounded bg-dark' style={imgStyle}></img>
                </div>
                <div className="col mt-3">
                    <h3 className="center h3">{nombre}</h3>
                    <p className="mt-2 center blockquote-footer Source Title h5">{descripción}</p>
                    {hayPromo ? 
                    (<h4 className="mt-1 text-center">
                        <span className="text-muted text-decoration-line-through me-2">${precio}</span>${precioPromo}</h4>) : (<h4 className="center fw-bolder">${precio}</h4>)}
                    {isInCart(id) === false ? 
                    (<Contador stock={stock}  onAdd={handleAdd}/>) 
                    : (<Link className="center mt-3" to={'/Carrito'} style={link}><Btn text={'Ir al Carrito'}/></Link>)}
                    <label htmlFor="comentarios" className="form-label"></label><textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comentarios..." name="comentarios"></textarea>
                </div>
            </div>
            
        </section>
    )
}