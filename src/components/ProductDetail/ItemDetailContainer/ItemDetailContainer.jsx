import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import dataBase from '../../../services/firebase'
import {collection, getDoc, doc} from "firebase/firestore";
import { Ring } from '@uiball/loaders'

export default function ItemDetailContainer() {
    const [data, setData] = useState([])
    const id = useParams().id
    function getDetailById(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const productCollectionRef = collection(dataBase, "menu")
                const docRef = doc(productCollectionRef, id)
                getDoc(docRef).then(snapshot => {
                resolve (
                    {...snapshot.data(), id: snapshot.id}
                )
            })
            }, 1000);
        })
    }
    useEffect(()=> {
        getDetailById(id).then(response => {
            setData(response)
        })
    }, [id])
    if (data.length === 0) {
        return (
            <main className="center">
                <div className="mt-5 pt-5">
                    <Ring 
                        size={50}
                        lineWeight={5}
                        speed={2} 
                        color="white" 
                    />
                </div>
            </main>
        )
    }
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
                precioTotal={data.precioTotal}
            />
        </main>
    )
}