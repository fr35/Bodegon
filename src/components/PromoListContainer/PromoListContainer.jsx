import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import dataProducts from "../../data/dataProducts";
import ItemList from "../ItemList/ItemList";
import PromoList from "../PromoList/PromoList";

export default function PromoListContainer() {
    const [data, setData] = useState([])
    function getProduct() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(dataProducts)
            }, 10);
        })
    }
    useEffect(() => {
        getProduct().then(product => {
            let productFilter = dataProducts.filter((item) => item.promo)
            setData(productFilter)
        })
    }, [])

    return (
        <main className="container mt-5">
            <h2 className="center pt-5">Promos</h2>
            <hr className='mb-4'/>
            <div className='row'>
                <PromoList data={data}/>
            </div>
        </main>
    )
}