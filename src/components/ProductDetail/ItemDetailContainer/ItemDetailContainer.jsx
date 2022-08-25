import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import dataProducts from "../../../data/dataProducts";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
    const [data, setData] = useState({})
    const url = useParams().url
    function getProduct() {
        return new Promise((resolve) => {
            let productFilter = dataProducts.find((item) => item.url == url)
            setTimeout(() => {
                resolve(productFilter)
            }, 10);
        })
    }
    useEffect(() => {
        getProduct().then((product) => setData(product))
    }, [])

    return (
        <main>
            <ItemDetail
                key={data.id}
                nombre={data.nombre}
                precio={data.precio}
                img={data.img}
                stock={data.stock}
                promo={data.promo}
                id={data.id}
                descripción={data.descripción}
                categoria={data.categoria}
                url={data.url}
            />
        </main>
    )
}