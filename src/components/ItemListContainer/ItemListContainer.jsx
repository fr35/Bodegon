import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import dataProducts from "../../data/dataProducts";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
    const [data, setData] = useState([])
    const nombreCategoria = useParams().nombreCategoria
    function getProduct() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(dataProducts)
            }, 10);
        })
    }
    useEffect(() => {
        getProduct().then(product => {
            let productFilter = dataProducts.filter((item) => item.categoria === nombreCategoria)
            setData(productFilter)
        })
    }, [nombreCategoria])

    return (
        <main className="container mt-3">
            <h2 className="center pt-5">{nombreCategoria}</h2>
            <hr className='mb-4'/>
            <div className='row'>
                <ItemList data={data}/>
            </div>
        </main>
    )
}