import { useEffect, useState } from 'react'
import dataOfertas from '../../data/DataOfertas/DataOfertas'
import OfertaProductosList from '../OfertaProductosList/OfertaProductosList'

export default function OfertaProductosContainer() {
    
    function getOfertas(){
        return new Promise ((resolve) => {
            setTimeout(() => resolve(dataOfertas), 2000)
        })
    }

    const [ofertas, setOfertas] = useState([])
    useEffect(
        () => {
            getOfertas().then((respuesta)=> {
                setOfertas(respuesta)
            });
        },
        []
    )

    return (
        <section className="container px-4 px-lg-5 mt-5">
            <h2 className="center">Nuestras Ofertas del Día</h2>
            <hr className='mb-5'/>
            <div className='row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center'>
                <OfertaProductosList data={ofertas}/>
            </div>
        </section>
    )
}