import { useEffect, useState } from "react"
import { API } from "../utils/constant"
import Card from "../components/Card"

function Homepage(){

    const [ dataset , setDataSet ] = useState(null)

    // making an api call
    async function fetchData(){
        const response = await fetch(API)
        const data = await response.json()
        setDataSet(data)
    } 

    useEffect(()=>{
        fetchData()
    } , [])



    return (
        <>
        <div className="card-group">
                {   
                
                    (dataset != null) 
                    ? 
                    dataset.map((item , index)=>{
                        return <Card key={index}  {...item}  />
                    }) :
                     "laoding"
                }
        </div></>
    )
   
}

export default Homepage ;