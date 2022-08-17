import { useEffect } from "react";
import { useState } from "react";
import dataCategorias from "../../data/dataCategoria";
import CategoryList from "../CategoriaList/CategoriaList";

export default function CategoriasContainer() {
    const [categoria, setCategoria] = useState([])
    function getCategoria() {
        return new Promise((resolve) => {
                resolve(dataCategorias)
        })
    }
    useEffect(() => {
        getCategoria().then(categoria => {
            setCategoria(categoria)
        })
    },[])
    return (
        <section className="container mt-5">
            <h2 className="center">Categorias</h2>
            <hr className="mb-4"/>
            <div className="center row">
                <CategoryList data={categoria}/>
            </div>
        </section>
    )
}