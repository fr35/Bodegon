import { createContext, useState } from 'react';

export const userEmailContext = createContext({username: 'default user'})
export function UserEmailContextProvider({children}) {
    const [userEmail, setUserEmail] = useState('')
    function cerrarSesión() {
        setUserEmail('')
    }
    return (
        <userEmailContext.Provider value={{userEmail,setUserEmail}}>
            {children}
        </userEmailContext.Provider>
    )
}