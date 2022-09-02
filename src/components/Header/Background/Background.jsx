
export function Background() { 
    const img = {maxHeight: '100vh', minHeight: '100vh', width: '100%'}
    return (
        <div className="mt-5">
            <img src='fotos/bodegon.jpeg' alt='background' style={img}/>
        </div>
    )
}