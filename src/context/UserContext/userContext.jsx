import { createContext } from "react"
import { useState } from "react"

export const userDataContext = createContext()
export function UserDataContextProvider({children}) {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userAdress, setUserAdress] = useState('')
    return (
        <userDataContext.Provider value={{userName: userName, setUserName: setUserName, userEmail: userEmail, setUserEmail: setUserEmail, userPassword: userPassword, setUserPassword: setUserPassword, userPhone: userPhone, setUserPhone: setUserPhone, userAdress: userAdress, setUserAdress: setUserAdress}}> 
            {children}
        </userDataContext.Provider>
    )
}