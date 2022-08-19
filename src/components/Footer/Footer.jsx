import { useContext } from "react"
import { userEmailContext } from "../../context/userEmailContext"


export default function Footer() {
    const {userEmail} = useContext(userEmailContext)
    return (
        <footer className="bg-dark text-white">
            <h1 className="center">footer</h1>
            <p className="center mt-3 mb-3">Usuario: {userEmail}</p>
        </footer>
    )
}
