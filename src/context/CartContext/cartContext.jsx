import { createContext, useState } from 'react'

export const cartContext = createContext()
export function CartContextProvider ({children}) {
    const [cart, setCart] = useState([])
    function addToCart(item, cantidad) {
        if (isInCart(item.id)) {
        } else {
        let copyCart = [...cart]
        copyCart.push({...item, quantity: cantidad})
        setCart(copyCart)
        }
    function isInCart(id) {
            return (cart.some(itemInCart => itemInCart.id === id))
        }
    console.log(cart);
    }
    return (
        <cartContext.Provider value={{cart, addToCart}}>
            {children}
        </cartContext.Provider>
    )
    
}