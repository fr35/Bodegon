import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import dataBase from '../../../services/firebase'
import {collection, getDoc, doc} from "firebase/firestore";

export default function ItemDetailContainer() {
    const [data, setData] = useState([])
    const id = useParams().id
    function getDetailById(id) {
        return new Promise((resolve) => {
            const productCollectionRef = collection(dataBase, "menu")
            const docRef = doc(productCollectionRef, id)
            getDoc(docRef).then(snapshot => {
                resolve (
                    {...snapshot.data(), id: snapshot.id}
                )
            })
        })
    }
    useEffect(()=> {
        getDetailById(id).then(response => {
            setData(response)
        })
    }, [id])
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