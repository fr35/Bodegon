export default function BtnAgregar(props) {
    function agregarProd() {console.log(`agregaste ${props.cantidad} productos`);}
    return (
        <button className="btn btn-outline-dark" onClick={agregarProd}>Agregar al Carrito</button>
    )
}