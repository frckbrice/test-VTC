import { createContext, useState, useContext, useMemo } from "react";

export const LogContext = createContext({})

const LogProvider = ({children}) => {
    const [nextCard, setNextCard] = useState(0);
    const values = {nextCard, setNextCard};
    return <LogContext.Provider value={values}>{children}</LogContext.Provider>   
}

export default LogProvider
// export const useValue = () => useContext(LogContext)

