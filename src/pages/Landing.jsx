import { useEffect, useState } from "react"
import styles from "../styles/landing.module.css"
import {API, features} from "../utils/constant" 
import truncate from "../utils/truncate"
import { useNavigate } from "react-router-dom"


const cateButtons = [
    {
        category : "men's clothing" ,
        title : "Men Clothing"
    } ,
    {
        category : "women's clothing" ,
        title : "Women Clothing"
    } ,
    {
        category : "electronics" ,
        title : "Electronics"
    } ,
    {
        category : "jewelery" ,
        title : "Jewellery"
    } ,
]



const Landing = () => {

    const [header , setHeader ] = useState(null)
    const navigate = useNavigate()

    async function fetchData(param){
        const res = await fetch(API + "/" + param)
        const data = await res.json()
        setHeader(data)
    }

    useEffect(()=>{

        const randomid = Math.ceil(Math.random() * 30 )
        fetchData(randomid)
    } , [])

  return (
    <div>

        {
            (header) ? 
            
            <main className={styles.main}>
                <div className={styles.first}>
                        <h3 className={styles.badge}>Top Rated Product of the month</h3>
                        <h1>{header.title}</h1>
                        <p>{truncate(header.description , 100 )}</p>
                        <button>Shop Now</button>
                </div>

                <div className={styles.second}>
                        <img src={header.image} alt="" />
                </div>
        </main>
        :
        "loading..."

        }



        <h1>Categories</h1>

        <div className={styles.category_wrapper}>

            {
                cateButtons.map((item , index)=>{
                    return <button key={index} onClick={ ()=>{ navigate(`/product/category/${item.category}`) } }>{item.title}</button>
                })
            }

        </div>

        <div className={styles.features}>

            { 
            features.map((item , index)=>{
                return <div key={index}>
                    <img src={ item.image } alt="icons of features" draggable={false}/>
                    <h1>{ item.title }</h1>
                    <p>{ item.description }</p>

                </div>
            })
            }

        </div>

    </div>
  )
}

export default Landing