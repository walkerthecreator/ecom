import { useContext, useEffect, useState } from "react"
import { API } from "../utils/constant"
import Card from "../components/Card"
import Loading from "../components/Loading"
import { FaArrowUp , FaArrowDown } from "react-icons/fa6";
import Store from "../context/store";

function Homepage(){

    const [ dataset , setDataSet ] = useState(null) //initial data do not make chnages here
    const [ displayData , setDisplayData] = useState([]) // this is just for displaying
    const [ showSort , setShowSort ] = useState(false)
    const [ showFilter , setShowFilter ] = useState(false)

    const { cart, setCart} = useContext(Store)


    function handleAddToCart({ title ,  id , price, category , description , image , rating  }){

        // checking whther the item exist in cart array 
        const checkItem = cart.find( (item) => {
            return item.id == id
        } )

        if(checkItem){
            // updates the count of item
            const updatedArray = cart.map((item ) => {
                        if(item.id == id) {
                             item.count++ 
                         }
                         return item
                    })
            setCart(updatedArray)
        }
        else{
            // create a new item in cart arr
            setCart([...cart , { title, category  , price , description , image , rating , id , count : 1} ])
        }

    }

    // making an api call
    async function fetchData(){
        const response = await fetch(API)
        const data = await response.json()
        setDataSet(data)
        setDisplayData(data)
    } 


    function handleSort(){
        let sortedArr = displayData
        sortedArr.sort((a , b)=>{
            return b.price - a.price
        })
        
        setDisplayData(sortedArr)
        setShowSort(false)
    }

    function handleSortAsc(){
        let sortedArr = displayData
        sortedArr = sortedArr.sort((a , b)=>{
            return a.price - b.price
        })

        setDisplayData(sortedArr)
        setShowSort(false)
    }

    function filterData(filtering){
        const updatedData = dataset.filter((item) =>{
            return item.category == filtering
        })
        setDisplayData(updatedData)
    }

    useEffect(()=>{
        fetchData()
    } , [])


    return (
        <>

        <div className="card-header">
            <button onClick={ ()=>{  setShowFilter(!showFilter)  } }>Filter</button>
            <button onClick={()=>{ setShowSort(!showSort) }} >Sort</button>

            {
                showSort &&
                <>
                <button onClick={ handleSortAsc }> Price <FaArrowDown /> </button>
                <button onClick={ handleSort }> Price <FaArrowUp /> </button>
                </>
            }
            {
                showFilter &&
                <>
                <button onClick={ ()=>{ filterData("men's clothing") } }>Men</button>
                <button onClick={ ()=>{ filterData("electronics") } }>Tech</button>
                </>
            }
        </div>

        <div className="card-group">
                {   
                
                    (dataset != null) 
                    ? 
                    displayData?.map((item , index)=>{
                        return <Card key={index}  {...item} handleAddToCart={handleAddToCart} />
                    }) 
                    :
                    <>
                     <Loading />
                     <Loading />
                     <Loading />
                    </>
                }
        </div></>
    )
   
}

export default Homepage ;