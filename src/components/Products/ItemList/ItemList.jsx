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
                    promo={product.promo}
                    id={product.id}
                    categoria={product.categoria}
                />
            )
        })
    )
}