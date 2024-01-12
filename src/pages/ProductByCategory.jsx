import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { API } from "../utils/constant"
import Card from "../components/Card"
import Store from "../context/store"


function Products (){
    const navigate = useNavigate()
    const params =  useParams()

    const [ product , setProduct ] = useState(null)
    
    async function fetchData(){
        const res = await fetch(API + "/category/"  + params.category )
        const data = await res.json()
        setProduct(data)
    }

    const { cart, setCart} = useContext(Store)


    function handleAddToCart({ title ,  id , price, category , description , image , rating  }){

        const checkItem = cart.find( (item) => {
            return item.id == id
        } )

        if(checkItem){
            const updatedArray = cart.map((item ) => {
                        if(item.id == id) {
                             item.count++ 
                         }
                         return item
                    })
            setCart(updatedArray)
        }
        else{
            setCart([...cart , { title, category  , price , description , image , rating , id , count : 1} ])
        }

    }

    useEffect(()=>{
        fetchData()
    } ,[] )

    return (
        <div>
            {
                product?.map((item , index ) => {
                    return <Card onClick={()=>{ navigate(`/product/${item.id}`) }} {...item} key={index} handleAddToCart={handleAddToCart}></Card>
                })
            }
        </div>
    )
}

export default Products