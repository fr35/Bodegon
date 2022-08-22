import { createContext, useState } from 'react'

export const cartContext = createContext()
export function CartContextProvider ({children}) {
    const [cart, setCart] = useState([])
    let copyCart = [...cart]
    console.log(cart);
    function isInCart(id) {
        return (cart.some(itemInCart => itemInCart.id === id))
        }
    function findItemInCart(id) {
        return (cart.findIndex(itemInCart => itemInCart.id === id))
        }
    function addToCart(item, cantidad) {
        if (isInCart(item.id, cantidad)) {
            const itemInCart = findItemInCart(item.id)
            copyCart[itemInCart].quantity+=cantidad
            setCart(copyCart)
        } else {
        copyCart.push({...item, quantity: cantidad})
        setCart(copyCart)
        }
    }
    function removeItemInCart(item) {
        const itemInCart = findItemInCart(item.id)
        cart.filter(item => item.id != itemInCart.id)
    }
    function removeAll() {
        copyCart = []
        setCart(copyCart)
    }

    return (
        <cartContext.Provider value={{cart, addToCart, removeItemInCart, removeAll}}>
            {children}
        </cartContext.Provider>
    )
    
}