import { useEffect, useState } from "react"
import styles from "../styles/landing.module.css"
import {API, features} from "../utils/constant" 
import truncate from "../utils/truncate"

const Landing = () => {

    const [header , setHeader ] = useState(null)

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
                        <h3>Top Rated Product of the month</h3>
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