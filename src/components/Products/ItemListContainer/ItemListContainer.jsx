import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { Ring } from '@uiball/loaders'
import dataBase from '../../../services/firebase'
import { getDocs, collection, query, where} from "firebase/firestore";


export default function ItemListContainer() {
    const bottom = {marginBottom: '300px'}
    const [data, setData] = useState([])
    const nombreCategoria = useParams().nombreCategoria 
    function getProductsByCategory(nombreCategoria) {
        return new Promise((resolve) => {
            const productCollectionRef = collection(dataBase, "menu")
            const q = query(productCollectionRef, where("categoria", "==", nombreCategoria))
            getDocs(q).then(snapshot => {
                const docsData = snapshot.docs.map(doc => {
                    return {...doc.data(), id: doc.id}
                })
                resolve(docsData)
            })
        })
    }
    useEffect(() => {
            getProductsByCategory(nombreCategoria).then((resolve) => {
            setData(resolve)
        })
    }, [nombreCategoria])
    return (
        <main className="container mt-5 text-white">
            <h2 className="center pt-5">{nombreCategoria}</h2>
            <hr className='mb-4'/>
            <div className='row'>
                {data.length === 0 ? (
                    <div className="center" style={bottom}>
                        <Ring 
                            size={50}
                            lineWeight={5}
                            speed={2} 
                            color="white" 
                        />
                    </div> ) : 
                    (<ItemList data={data}/>)}
            </div>
        </main>
    )
}