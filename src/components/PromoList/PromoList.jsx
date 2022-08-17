import PromoProduct from "../PromoProduct/PromoProduct"

export default function PromoList({data}) {
    return (
        data.map((product) => {
            return (
                <PromoProduct
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