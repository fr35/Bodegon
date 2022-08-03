export default function Carrito() {
    return (
        <form className="d-inline p-2">
            <button className="btn btn-outline-light" type="submit">
                <i className="bi-cart-fill"></i>
                <span className="badge bg-danger text-white ms-1 rounded-pill">0</span>
            </button>
        </form>
    )
}