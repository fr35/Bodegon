import { createContext, useState } from 'react';

export const userNameContext = createContext({name: 'undefined'})
export function UserNameContextProvider({children}) {
    const [userName, setUserName] = useState('')
    return (
        <userNameContext.Provider value={{userName,setUserName}}>
            {children}
        </userNameContext.Provider>
    )
}