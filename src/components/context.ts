import { createContext, useState } from "react";

export const AuthContext = createContext({})

const Provider = ({children}) => {
    const [value, setValue] = useState()

    return(
        <AuthContext.Provider>{children}</AuthContext.Provider>
    )
}