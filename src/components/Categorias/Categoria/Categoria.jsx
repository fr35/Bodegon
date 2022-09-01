import {Link} from 'react-router-dom'
import {React} from 'react'
export default function Categoria({nombreCategoria, img}) {
    const circle = {borderRadius: "50%", height: "100px", width: "100px"}
    const link = {textDecoration: 'none'}
    return (
        <Link to={`/Categoria/${nombreCategoria}`} className="col col-4 col-md-3 me-3 ms-3 mb-4 center card" style={link}>
                <img src={img} alt={img} className='mt-2' style={circle}/>
                <h6 className="mt-2 text-black">{nombreCategoria}</h6>
        </Link>
    )
}