import CategoriaList from "../CategoriaList/CategoriaList"


export default function CategoriasContainer() {

    const categorias = [
        {id: 1, nombreCategoria: 'Guarniciones', img: 'https://media.istockphoto.com/photos/traditional-brazilian-pub-food-provolone-cheese-in-breadcrumbs-called-picture-id1255006917?b=1&k=20&m=1255006917&s=170667a&w=0&h=8SwDoNnNs74nRaiBMJf_LvLVVLAjCTu4NUE5czFHt7Y='},
        {id: 2, nombreCategoria: 'Parrilla', img: 'https://media.istockphoto.com/photos/argentina-barbecue-picture-id471058655?k=20&m=471058655&s=612x612&w=0&h=BnT8UCbJgpzZJBAFKRlQ5EEsslrh-UOemI_AhIRdWsU='},
        {id: 3, nombreCategoria: 'Pastas', img: 'https://media.istockphoto.com/photos/homemade-sausage-and-tomato-spaghetti-picture-id1176459624?b=1&k=20&m=1176459624&s=170667a&w=0&h=1NwZSV9mkCNF2EtwDKzwJfaaMW5RtgGtieR6xSsPXEA='},
        {id: 4, nombreCategoria: 'Minutas', img: 'https://media.istockphoto.com/photos/beef-steak-breaded-milanesa-style-picture-id1363507709?b=1&k=20&m=1363507709&s=170667a&w=0&h=BG5bQ-CAxzVJ79OepCy_LQLV5I3mgXptnrXJAyfR5R4='},
        {id: 5, nombreCategoria: 'Postres', img: 'https://foodish-api.herokuapp.com/images/dessert/dessert1.jpg'},
        {id: 6, nombreCategoria: 'Bebida', img: 'https://generatorfun.com/code/uploads/Random-Wine-image-4.jpg'}
    ]
    
    return (
        <section className="container mt-5 pb-5">
            <h2 className="center">Categorias</h2>
            <hr className="mb-4"/>
            <div className="center row">
                <CategoriaList data={categorias}/>
            </div>
        </section>
    )
}