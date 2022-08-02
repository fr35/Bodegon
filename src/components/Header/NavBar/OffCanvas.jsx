import DropdownList from "./DropdownList";

export default function OffCanvas() {
    return (
    <div className="offcanvas offcanvas-start bg-dark text-white" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
                <button type="button" className="btn-close text-reset position-absolute end-0 me-4 mt-1" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body mt-5">
            <h2 className="offcanvas-title center mb-4" id="offcanvasNavbarLabel">Bodegón</h2>
            <DropdownList></DropdownList>
        </div>
    </div>
    )
}