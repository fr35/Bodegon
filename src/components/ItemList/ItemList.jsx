import ItemProduct from "../ItemProduct/ItemProduct"

export default function ItemList({data}) {
    return (
        
        data.map((product) => {
            return (
                <ItemProduct
                    key={product.id}
                    nombre={product.nombre}
                    precio={product.precio}
                    img={product.img}
                    stock={product.stock}
                    promo={product.promo}
                    id={product.id}
                    descripción={product.descripción}
                    categoria={product.categoria}
                    url={product.url}
                />
            )
        })
    )
}