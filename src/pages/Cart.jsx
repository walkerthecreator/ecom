import { useContext, useState } from "react"
import Store from "../context/store"
import CartProduct from "../components/CartProduct"
import styles from "../styles/cart.module.css"

const Cart = () => {

    const { cart , setCart , total } = useContext(Store)


    function inc(id){

        const updatedArr = cart.map((item , index)=>{
            if(item.id == id){
                item.count++
            }
            return item
        })

        setCart(updatedArr)
    }

    function dec(id){

        const updatedArr = cart.map((item , index)=>{
            if(item.id == id && item.count > 1) item.count--
            
            return item
        })

        setCart(updatedArr)
    }



    function removeItem(id){

        const updatedCart = cart.filter((item ) => {
            return item.id != id
        })

        setCart(updatedCart)
    }

    console.log(cart)

  return (
    <>
        <main>

        <div className={styles.cart_wrapper}>

            {
                ( cart.length == 0  ) ?
                "Cart is empty"
                :
                cart.map((item ) => {
                    return <CartProduct {...item} removeItem={ removeItem } inc={inc} dec={dec}/>
                    
                })
            }

        </div>
        <div className={styles.billing_wrapper}>

            <div className={styles.billing}>
                <h1>Billing</h1>
                {
                    cart?.map((item )=>{
                        return <div className={styles.billing_card}>
                                <h1>{item?.title}</h1>
                                <p> { item?.count } x ${item.price} = ${ item?.price * item?.count }  </p>
                        </div>
                    })

                }
                <h1>Subtotal <span>${total}</span></h1>
            </div>

        </div>
        </main>
    </>
  )
}



export default Cart