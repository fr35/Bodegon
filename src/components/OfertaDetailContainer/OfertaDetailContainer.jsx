import { useEffect, useState } from 'react'
import dataOfertas from '../../data/DataOfertas/DataOfertas'
import OfertaDetail from "../OfertaDetail/OfertaDetail"

export default function OfertaDetailContainer() {

    function getOfertas(){
        return new Promise ((resolve) => {
            setTimeout(() => resolve(dataOfertas), 2000)
        })
    }

    const [ofertas, setOfertas] = useState([])
    useEffect(
        () => {
            getOfertas().then((respuesta)=> {
                setOfertas(respuesta[0])
            });
        },
        []
    )

    return (
            <OfertaDetail data={ofertas}/>
    )
}