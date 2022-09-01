import { useState } from "react";
import { useEffect } from "react";
import CategoryList from "../CategoriaList/CategoriaList";
import dataBase from '../../../services/firebase'
import { getDocs, collection} from "firebase/firestore";

export default function CategoriasContainer() {
    const [categoria, setCategoria] = useState([])
    function getCategory() {
        return new Promise((resolve) => {
            const categoryCollection = collection(dataBase, "categorias")
            getDocs(categoryCollection).then(snapshot => {
            const docsData = snapshot.docs.map(doc => {
                return {...doc.data(), id: doc.id}
            })
            resolve(docsData)
        })
        })
    }  
    useEffect(() => {
        getCategory().then(categoria => {
            setCategoria(categoria)
        })
    },[])
    return (
        <section className="container">
            <h2 className="center">Categorias</h2>
            <hr className="mb-4"/>
            <div className="center row">
                <CategoryList data={categoria}/>
            </div>
        </section>
    )
}