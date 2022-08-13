import { useEffect, useState } from 'react'
import dataOfertas from '../../data/DataOfertas/DataOfertas'
import OfertaProductosList from '../OfertaProductosList/OfertaProductosList'

export default function OfertaProductosContainer() {
    function getOfertas(){
        return new Promise ((resolve, reject) => {
            setTimeout(() => resolve(dataOfertas), 2000)
        })
    }

    const [ofertas, setOfertas] = useState([])
    useEffect(
        () => {
            getOfertas().then((respuesta)=> {
                setOfertas(respuesta)
            }).catch((error) => {
                console.log(error);
            })
        },
        []);

    return (
        <section className="container mt-5">
            <h2 className="center">Nuestras Ofertas del Día</h2>
            <hr className='mb-4'/>
            <div className='row'>
                <OfertaProductosList data={ofertas}/>
            </div>
        </section>
    )
}