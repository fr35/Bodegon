import { createContext, useState } from 'react';

export const userPasswordContext = createContext({password: 'undefined'})
export function UserPasswordContextProvider({children}) {
    const [userPassword, setUserPassword] = useState('undefined')
    return (
        <userPasswordContext.Provider value={{userPassword,setUserPassword}}>
            {children}
        </userPasswordContext.Provider>
    )
}