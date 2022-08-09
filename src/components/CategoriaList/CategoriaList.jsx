export default function CategoriaList( props ) {

    const circle = {borderRadius: "50%", height: "100px", width: "100px"}
    const sinBorde = {borderColor: 'white'}

    return (
        <button className="col me-1 btn btn-outline-dark" style={sinBorde}>
            <img src={props.data.img} alt="..." style={circle}/>
            <p className="fw-bolder">{props.data.nombre}</p>
        </button>
    )
}