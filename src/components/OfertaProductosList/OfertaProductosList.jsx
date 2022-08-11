import OfertaProducto from "../OfertaProducto/OfertaProducto"


export default function OfertaProductosList({data}) {
    return (
        data.map((producto) => {
            return (
                <OfertaProducto
                    key={producto.id}
                    nombre={producto.nombre}
                    price={producto.price}
                    img={producto.img}
                    stock ={producto.stock}
                    oferta = {producto.oferta}
                    id = {producto.id}
                    url={producto.url}
                />
            )
        })
    )
}