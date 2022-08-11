import {Link} from 'react-router-dom'
export default function Categoria({nombre, img, url}) {
    const circle = {borderRadius: "50%", height: "162px", width: "162px"}
    const sinBorde = {border: 'none'}

    return (
        <Link to={url} className="col me-1 btn btn-outline-dark" style={sinBorde}>
            <img src={img} alt="..." style={circle}/>
            <p className="fw-bolder">{nombre}</p>
        </Link>
    )
}