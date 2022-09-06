export default function MediosDePago() {
    const img = {height: '50px'}
    return (
        <div className="row mt-5 mb-5 center">
            <div className="col col-4 col-lg-1 center">
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" style={img} alt='visa' className="mb-3"/>    
            </div>
            <div className="col col-4 col-lg-1 center">
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" style={img} alt='masterCard' className="mb-3"/>
            </div>
            <div className="col col-4 col-lg-1 center">
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" style={img} alt='americanExpress' className="mb-3"/>
            </div>
            <div className="col col-4 col-lg-1 center">
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png" style={img} alt='diners' className="mb-3"/>
            </div>
            <div className="col col-4 col-lg-1 center">
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png" style={img} alt='banelco' className="mb-3"/>
            </div>
            <div className="col col-4 col-lg-1 center">
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png" style={img} alt='cabal' className="mb-3"/>
            </div>
            <div className="col col-4 col-lg-1 center">
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png" style={img} alt='naranja' className="mb-3"/>
            </div>
            <div className="col col-4 col-lg-1 center">
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-shopping@2x.png" style={img} alt='tarjetaShopping' className="mb-3"/>
            </div>
            <div className="col col-4 col-lg-1 center">
                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" style={img} alt='mercadoPago' className="mb-3"/>
            </div>
        </div>
    )
}