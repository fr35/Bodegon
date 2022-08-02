import './Background.css'
export function Background() {
    const color = {color: "black",}
    return (
        <header className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center">
                    <h1 className="display-2 fw-bolder mb-5" style={color}>Bodegón </h1>
                    <h2 className="fw-bolder mt-4" style={color}>Disfruta de nuestra comida con la comodidad de tu hogar</h2>
                </div>
            </div>
        </header>
    )
}