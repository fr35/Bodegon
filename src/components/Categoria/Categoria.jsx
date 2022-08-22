import {Link} from 'react-router-dom'
export default function Categoria({nombreCategoria, img}) {
    const circle = {borderRadius: "50%", height: "150px", width: "150px"}
    const sinBorde = {border: 'none'}

    return (
        <Link to={`/Categoria/${nombreCategoria}`} className="col btn btn-outline-dark" style={sinBorde}>
                <img src={img} alt={img} className='mt-2' style={circle}/>
                <h6 className="mt-2">{nombreCategoria}</h6>
        </Link>
    )
}