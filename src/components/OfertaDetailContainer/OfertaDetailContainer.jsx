import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dataOfertas from '../../data/DataOfertas/DataOfertas'
import OfertaDetail from "../OfertaDetail/OfertaDetail"

export default function OfertaDetailContainer({productId}) {
    const [ofertas, setOfertas] = useState({})
    const {id} = useParams()

    function getOfertas() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                let productRequested = dataOfertas.find(
                    (product) => product.id === Number(id)
                );
                if (productRequested = undefined) reject('No encontramos el producto')
                else resolve(productRequested)
            }, 1000);
        });
    }

    useEffect(() => {
            getOfertas()
                .then((respuesta)=> {setOfertas(respuesta)})
                .catch((error) => alert(error))
        },[]);  

    return (
        <main>
            <OfertaDetail
                id={ofertas.id}
                nombre={ofertas.nombre}
                img={ofertas.img}
                description={ofertas.description}
                oferta={ofertas.oferta}
                price={ofertas.price}
                stock={ofertas.stock}
            />
        </main>
    )


}