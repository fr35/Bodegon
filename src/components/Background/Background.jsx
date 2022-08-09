import './Background.css'
export function Background() {
    const color = {color: "",}
    return (
        <div className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center">
                    <h1 className="display-1 fw-bolder mb-5 text-danger" style={color}>Bodegón</h1>
                    <h2 className="fw-bolder text-danger" style={color}>Disfruta de nuestra comida con la comodidad de tu hogar</h2>
                </div>
            </div>
        </div>
    )
}