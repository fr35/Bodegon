import Categoria from "../Categoria/Categoria"

export default function CategoryList( {data} ) {
    return (
        data.map((categoria) => {
            return (
                <Categoria
                    key={categoria.id}
                    nombre={categoria.nombre}
                    img={categoria.img}
                    url={categoria.url}
                />
            )
        })
    )
}