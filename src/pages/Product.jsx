import { useParams } from "react-router-dom"
import { API } from "../utils/constant"
import { useEffect, useState } from "react"



const Product = () => {

    const param = useParams()

    const [ data , setData ] = useState(null)

    async function fetchData(){
        const response = await fetch(API + `/${param.id}`)
        const json = await  response.json()
        console.log(json)
        setData(json)
    }

    useEffect(()=>{
        fetchData()
    } , [] )

    // make an api call to "https://fakestoreapi.com/products/id"


  return (
    
    <div>
        {
            !data ? "loading..." :

            <div>
                <h1>{data.title}</h1>
                <p>{ data.price  }</p>
                <span>{ data.description }</span>
            </div>

        }
    </div>

  )
}

export default Product