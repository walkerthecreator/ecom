import { createContext, useEffect, useState } from "react";

const Store = createContext()

export const Provider = ({ children }) => {

    const [user , setUser ] = useState(null)
    const [ cart , setCart ] = useState([])
    const [ total , setTotal ] = useState(0) 

    function getTotal(){
        setTotal(0)
        cart.map((item) => {
            setTotal(total + item.price)
        })
    }

    useEffect(()=>{
        const data = localStorage.getItem("user")
        if(data) setUser(JSON.parse(data))
    } , [])

    useEffect(()=>{
        getTotal()
        console.log(total)

    } , [cart])



    return <Store.Provider value={{ user , setUser , cart , setCart , total }} >
        { children }   {/* whatever is written inside of starting and ending tag of provider */}
        </Store.Provider>
}

export default Store