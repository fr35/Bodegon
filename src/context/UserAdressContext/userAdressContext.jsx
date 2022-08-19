import { createContext, useState } from 'react';

export const userAdressContext = createContext({adress: 'undefined'})
export function UserAdressContextProvider({children}) {
    const [userAdress, setUserAdress] = useState('')
    return (
        <userAdressContext.Provider value={{userAdress,setUserAdress}}>
            {children}
        </userAdressContext.Provider>
    )
}