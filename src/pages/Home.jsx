import { Background } from "../components/Header/Background/Background";
import CategoriasContainer from "../components/Categorias/CategoriasContainer/CategoriasContainer";
import PromoListContainer from "../components/Products/PromoListContainer/PromoListContainer";



export default function Home() {
    return (
        <>
            <Background/>
            <CategoriasContainer/>
            <PromoListContainer/>
        </>
    )
}