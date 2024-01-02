import { createContext, useEffect, useState } from "react";

const Store = createContext()

export const Provider = ({ children }) => {

    const [user , setUser ] = useState(null)
    const [ cart , setCart ] = useState([])

    useEffect(()=>{
        const data = localStorage.getItem("user")
        if(data) setUser(JSON.parse(data))
    } , [])



    return <Store.Provider value={{ user , setUser , cart , setCart}} >
        { children }   {/* whatever is written inside of starting and ending tag of provider */}
        </Store.Provider>
}

export default Store