import { useContext } from "react"
import { userAdressContext } from "../../context/UserAdressContext/userAdressContext"
import { userEmailContext } from "../../context/UserEmailContext/userEmailContext"
import { userNameContext } from "../../context/UserNameContext/userNameContext"
import { userPasswordContext } from "../../context/UserPasswordContext/userPasswordContext"
import { userPhoneContext } from "../../context/UserPhoneContext/userPhoneContext"


export default function Footer() {
    const link = {textDecoration: 'none', color: 'white'}
    const imgPago = {width: '20%', height: '25px', marginLeft: '5px'}
    const {userEmail} = useContext(userEmailContext)
    const {userName} = useContext(userNameContext)
    const {userPhone} = useContext(userPhoneContext)
    const {userAdress} = useContext(userAdressContext)
    
    return (
        <footer className="bg-dark">
            <div className="container text-white">
                <div className="row text-center">
                    <div className="col mt-3">
                        <h5>Ubicación</h5>
                        <a href="https://goo.gl/maps/dJCcmaN1gZRptYac8" target="_blank" style={link}>
                            <p className="mt-1">12 octubre 251<br/>Quilmes<br/>Buenos Aires<br/>Argentina</p>
                        </a>
                    </div>
                    <div className="col mt-3">
                        <h5>Medios de Pago</h5>
                        <div className="row">
                            <div className="col">
                                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" alt="visa" style={imgPago}/>
                                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" alt="masterCard" style={imgPago}/>
                                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" alt="americanExpress" style={imgPago}/>
                            </div>
                            <div className="h-100 mt-2"></div>
                            <div className="col">
                                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png" alt="diners" style={imgPago}/>
                                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/banelco@2x.png" alt="banelco" style={imgPago}/>
                                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/cabal@2x.png" alt="cabal" style={imgPago}/>
                            </div>
                            <div className="h-100 mt-2"></div>
                            <div className="col mb-2">
                                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/ar/tarjeta-naranja@2x.png" alt="naranja" style={imgPago}/>
                                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png" alt="mercadoPago" style={imgPago}/>
                                <img src="https://img2.freepng.es/20180329/dvw/kisspng-computer-icons-money-bag-bank-clip-art-cash-5abd04392ed488.0719735515223368251918.jpg" alt="efectivo" style={imgPago}/>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <h5>Usuario</h5>
                        <p>{userEmail}<br/>{userName}<br/>{userPhone}<br/>{userAdress}</p>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}
