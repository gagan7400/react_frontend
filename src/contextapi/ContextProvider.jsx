import React, { createContext } from 'react'
export let dataContext = createContext();

function ContextProvider({ children }) {
    const [name, setName] = React.useState("John Doe");
    return (
        <>
            <dataContext.Provider value={{ name, setName }}>
                {children}
            </dataContext.Provider>
        </>
    )
}
export default ContextProvider