import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import dataProducts from "../../data/dataProducts";
import PromoDetail from "../PromoDetail/PromoDetail";


export default function PromoDetailContainer() {
    const [data, setData] = useState([])
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
            <PromoDetail data={data}/>
        </main>
    )
}