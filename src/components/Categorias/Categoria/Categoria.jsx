import {Link} from 'react-router-dom'
import {React} from 'react'

export default function Categoria({nombreCategoria, img}) {
    const circle = {borderRadius: "50%", height: "150px", width: "150px"}
    const link = {textDecoration: 'none', height: '200px'}
    const backgroundNone = {background: 'none'}
    
    return (
        <Link to={`/Categoria/${nombreCategoria}`} className="col col-8 col-md-3 me-3 ms-3 mb-5 center card bg-dark bg-opacity-50" style={link}>
                <img src={img} alt={img} className='mt-2' style={circle}/>
                <h6 className="mt-2 text-white" style={backgroundNone}>{nombreCategoria}</h6>
        </Link>
    )
}