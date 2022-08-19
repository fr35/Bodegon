import { createContext, useState } from 'react';

export const userPhoneContext = createContext({phone: 'undefined'})
export function UserPhoneContextProvider({children}) {
    const [userPhone, setUserPhone] = useState('')
    return (
        <userPhoneContext.Provider value={{userPhone,setUserPhone}}>
            {children}
        </userPhoneContext.Provider>
    )
}