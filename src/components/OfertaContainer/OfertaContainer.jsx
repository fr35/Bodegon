import Oferta from "../Oferta/Oferta"

export default function OfertaContainer() {
    
    const ofertas = [
        {
            nombre: 'Pizza Muzzarella Individual',
            precio: 1000,
            img: 'https://foodish-api.herokuapp.com/images/pizza/pizza55.jpg',
            descript: 'Pizza Muzzarella individual 4 porciones',
            stock: 7,
            oferta: 25
        },
        {
            nombre: 'Pizza Muzzarella Individual',
            precio: 1000,
            img: 'https://foodish-api.herokuapp.com/images/pizza/pizza55.jpg',
            descript: 'Pizza Muzzarella individual 4 porciones',
            stock: 7,
            oferta: 5
        }
    ]

    return (
        <section className="container px-4 px-lg-5 mt-5">
            <h2 className="center mb-5">Nuestras Ofertas del Día</h2>
            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <Oferta data={ofertas[0]}/>
                <Oferta data={ofertas[1]}/>
                </div>
        </section>
    )
}