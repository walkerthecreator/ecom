import { createContext, useEffect, useState } from "react";

const Store = createContext()

export const Provider = ({ children }) => {

    const [user , setUser ] = useState(null)



    return <Store.Provider value={{ user , setUser}} >
        { children }   {/* whatever is written inside of starting and ending tag of provider */}
        </Store.Provider>
}

export default Store