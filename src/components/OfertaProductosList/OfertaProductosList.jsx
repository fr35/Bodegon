import OfertaProducto from "../OfertaProducto/OfertaProducto"


export default function OfertaProductosList({data}) {
    return (
        data.map((product) => {
            return (
                <OfertaProducto
                    key={product.id}
                    nombre={product.nombre}
                    price={product.price}
                    img={product.img}
                    stock={product.stock}
                    oferta={product.oferta}
                    id={product.id}
                    description={product.description}
                />
            )
        })
    )
}