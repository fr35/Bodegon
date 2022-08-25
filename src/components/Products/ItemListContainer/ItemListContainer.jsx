import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import dataProducts from "../../../data/dataProducts";
import ItemList from "../ItemList/ItemList";
import { Ring } from '@uiball/loaders'

export default function ItemListContainer() {
    const [data, setData] = useState([])
    const nombreCategoria = useParams().nombreCategoria
    function getProduct() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(dataProducts)
            }, 1000);
        })
    }
    useEffect(() => {
        getProduct().then(product => {
            let productFilter = dataProducts.filter((item) => item.categoria === nombreCategoria)
            setData(productFilter)
        })
    }, [nombreCategoria])

    return (
        <main className="container mt-5">
            <h2 className="center pt-5">{nombreCategoria}</h2>
            <hr className='mb-4'/>
            <div className='row'>
            {data.length === 0 ? (<Ring 
                        size={50}
                        lineWeight={5}
                        speed={2} 
                        color="black" 
                    />) : 
                    (
                    <ItemList data={data}/>)}
            </div>
        </main>
    )
}