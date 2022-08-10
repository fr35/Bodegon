import CategoriaList from "../CategoriaList/CategoriaList"


export default function CategoriasContainer() {

    const categorias = [
        {nombre: 'Entrada', img: 'https://media.istockphoto.com/photos/traditional-brazilian-pub-food-provolone-cheese-in-breadcrumbs-called-picture-id1255006917?b=1&k=20&m=1255006917&s=170667a&w=0&h=8SwDoNnNs74nRaiBMJf_LvLVVLAjCTu4NUE5czFHt7Y='},
        {nombre: 'Parrilla', img: 'https://pixabay.com/get/g215adf5deae943867177c4144a7e2db7ad0861eb076daae80b229e970b28b644d0a1199804b87c587f709f54571eb842a67c217e5cd137900e61f40073836f22_640.jpg'},
        {nombre: 'Pastas', img: 'https://media.istockphoto.com/photos/homemade-sausage-and-tomato-spaghetti-picture-id1176459624?b=1&k=20&m=1176459624&s=170667a&w=0&h=1NwZSV9mkCNF2EtwDKzwJfaaMW5RtgGtieR6xSsPXEA='},
        {nombre: 'Minutas', img: 'https://media.istockphoto.com/photos/beef-steak-breaded-milanesa-style-picture-id1363507709?b=1&k=20&m=1363507709&s=170667a&w=0&h=BG5bQ-CAxzVJ79OepCy_LQLV5I3mgXptnrXJAyfR5R4='},
        {nombre: 'Postres', img: 'https://foodish-api.herokuapp.com/images/dessert/dessert1.jpg'},
        {nombre: 'Bebida', img: 'https://generatorfun.com/code/uploads/Random-Wine-image-4.jpg'}
    ]
    
    return (
        <section className="container mt-5">
            <h2 className="center">Categorias</h2>
            <hr className="mb-5"/>
            <div className="center row mt-2">
                <CategoriaList data={categorias}/>
            </div>
        </section>
    )
}