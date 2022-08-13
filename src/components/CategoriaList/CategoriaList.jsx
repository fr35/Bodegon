import Categoria from "../Categoria/Categoria"

export default function CategoryList( {data} ) {
    return (
        data.map((categoria) => {
            return (
                <Categoria
                    key={categoria.id}
                    nombreCategoria={categoria.nombreCategoria}
                    img={categoria.img}
                    url={categoria.url}
                />
            )
        })
    )
}