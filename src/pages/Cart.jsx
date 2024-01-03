import { useContext, useState } from "react"
import Store from "../context/store"
import CartProduct from "../components/CartProduct"

const Cart = () => {

    const { cart , setCart , total } = useContext(Store)

    // create a function which will increase and decrease the value of count in object of cart array



    function removeItem(id){
        // some logic for deleting item from an array

        const updatedCart = cart.filter((item ) => {
            return item.id != id
        })

        setCart(updatedCart)
    }

    console.log(cart)

  return (
    <div className="cart-wrapper">

        <div>
            <h1>Billing</h1>

            <h2>your total is {total}</h2>

        </div>




        <h1>Cart</h1>

        


        {
            ( cart.length == 0  ) ?
            "Cart is empty"
            :
            cart.map((item ) => {
                return <CartProduct {...item} removeItem={ removeItem }/>

            })
        }

    </div>
  )
}



export default Cart