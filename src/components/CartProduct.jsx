import Star from "./Star"
import styles from '../styles/cart.module.css'
import { useState } from "react"
import { RiDeleteBinLine } from "react-icons/ri"


const SingleProduct = ({ id,  image , title , price , category , rating , removeItem , count }) => {

  

  

  return (
    <div className={styles.cartDiv} key={id}>
                    <img src={image} alt="" />
                    
                    <div>
                        <h1>{title}</h1>
                        <Star rating={Math.round(rating.rate)}></Star> <span>{rating.count}</span>
                        <p>{category}</p>
                        <h2>${price}</h2>
                        <button onClick={ ()=>{ removeItem(id) } }> <RiDeleteBinLine/> remove</button>

                        {/* <button onClick={ dec } >-</button> */}
                        <span>{ count }</span>
                        {/* <button onClick={ ()=>{ setCount(count + 1) } }>+</button> */}
                    </div>
                </div>
  )
}

export default SingleProduct