export default function CategoriaList( props ) {
    const circle = {borderRadius: "50%", height: "100px", width: "120px"}
    return (
        <button class="col btn">
            <img class="" src={props.data.img} alt="..." style={circle}/>
            <p className="fw-bolder">{props.data.nombre}</p>
        </button>
    )
}