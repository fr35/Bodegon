import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { Ring } from '@uiball/loaders'
import dataBase from '../../../services/firebase'
import { getDocs, collection, query, where} from "firebase/firestore";


export default function PromoListContainer() {
    const bottom = {marginBottom: '300px'}
    const [data, setData] = useState([])
    
    
    function getProductsByCategory() {
        return new Promise((resolve) => {
            const productCollectionRef = collection(dataBase, "menu")
            const q = query(productCollectionRef, where("promo", ">", 0))
            getDocs(q).then(snapshot => {
                const docsData = snapshot.docs.map(doc => {
                    return {...doc.data(), id: doc.id}
                })
                resolve(docsData)
            })
        })
    }
    useEffect(() => {
        getProductsByCategory().then((resolve) => {
        setData(resolve)
    })
}, [])
    return (
        <main className="container mt-5 text-white">
            <h2 className="text-center pt-5">Promos</h2>
            <hr className='mb-4'/>
            <div className='row'>
                {data.length === 0 ? (<div className="center" style={bottom}>
                    <Ring 
                            size={50}
                            lineWeight={5}
                            speed={2} 
                            color="white" 
                        />
                </div>) : 
                        (<ItemList data={data}/>)}
            </div>
        </main>
    )
}