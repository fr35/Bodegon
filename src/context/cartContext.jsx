import { useEffect } from 'react'
import { createContext, useState } from 'react'

export const cartContext = createContext()
export function CartContextProvider ({children}) {
    const cartStorage = JSON.parse(localStorage.getItem('setStorage')) || []
    const [cart, setCart] = useState(cartStorage)
    let copyCart = [...cart]
    useEffect(() => {
        localStorage.setItem('setStorage', JSON.stringify(cart))
    }, [cart])

    function isInCart(id) {
        return (copyCart.some(itemInCart => itemInCart.id === id))
    }
    function findItem(id) {
        return (copyCart.find(item => item.id === id))
    }
    function addToCart(item, cantidad) {
            copyCart.push({ ...item, cantidad });
            setCart(copyCart)
    }
    function removeItemInCart(id) {
        const itemId = findItem(id)
        const itemRemove = copyCart.indexOf(itemId)
        copyCart.splice(itemRemove, 1)
        setCart(copyCart)
    }
    function removeAll() {
        copyCart = []
        setCart(copyCart)
    }
    function cantidadTotal() {
        let cantidadEnCarito = 0;
        copyCart.map(item => cantidadEnCarito += item.cantidad);
        return cantidadEnCarito;
    }
    function precioTotalCompra() {
        let precioTotalCompra = 0;
        copyCart.map((item) => precioTotalCompra += item.precioTotal);
        return precioTotalCompra;
    }
    return (
        <cartContext.Provider value={{cart, addToCart, removeItemInCart, removeAll, cantidadTotal, precioTotalCompra, isInCart}}>
            {children}
        </cartContext.Provider>
    )
    
}