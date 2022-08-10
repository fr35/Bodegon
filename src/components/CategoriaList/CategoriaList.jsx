export default function CategoryList( {data} ) {

    const circle = {borderRadius: "50%", height: "162px", width: "162px"}
    const sinBorde = {border: 'none'}

    return (
        data.map((categoria) => {
            return (
                <button className="col me-1 btn btn-outline-dark" style={sinBorde}>
                    <img src={categoria.img} alt="..." style={circle}/>
                    <p className="fw-bolder">{categoria.nombre}</p>
                </button>
            )
        })
    )
}