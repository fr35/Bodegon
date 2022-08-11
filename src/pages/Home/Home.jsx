import { Background } from "../../components/Background/Background";
import CategoriasContainer from "../../components/CategoriasContainer/CategoriasContainer";
import OfertaDetailContainer from "../../components/OfertaDetailContainer/OfertaDetailContainer";
import OfertaProductosContainer from "../../components/OfertaProductosContainer/OfertaProductosContainer";

export default function Home() {
    return (
        <>
            <Background/>
            <CategoriasContainer/>
            <OfertaProductosContainer/>
            <OfertaDetailContainer/>
        </>
    )
}