import { useParams } from "react-router-dom"
import { API } from "../utils/constant"
import { useEffect, useState } from "react"



const Product = () => {

    const param = useParams()

    const [ data , setData ] = useState(null)
    const [ suggestions , setSuggestions ] = useState(null)

    async function fetchData(){
        const response = await fetch(API + `/${param.id}`)
        const json = await  response.json()
        console.log(json)
        setData(json)
    }

    useEffect(()=>{
        fetchData()
    } , [] )

    useEffect(()=>{
        if(data){
            getSuggestions(data.category)
        }
    } ,  [data])


    async function getSuggestions(category){
        const res = await fetch(API + `/category/${category}`) // https://fakestore.com/products/ + /category/jewellery
        const json = await res.json() 
        console.log("suggestions " , json)
        setSuggestions(json)
    }    


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


        <h3>Recommendations Based on {data?.title}</h3>

        <div className="suggestion_wrapper">
            {
                suggestions?.map((item , index) => {
                    return <div>
                        <h2>{item.title}</h2>
                    </div>
                })
            }
        </div>
    

    </div>

  )
}

export default Product