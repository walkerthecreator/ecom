import { useContext } from "react"
import Store from "../context/store"
import Star from "../components/Star"
import styles from '../styles/cart.module.css'

const Cart = () => {

    const { cart , setCart } = useContext(Store)

  return (
    <div className="cart-wrapper">
        <h1>Cart</h1>

        


        {
            ( cart.length == 0  ) ?
            "Cart is empty"
            :
            cart.map((item ) => {
                return <div className={styles.cartDiv} key={item.id}>
                    <img src={item.image} alt="" />
                    
                    <div>
                        <h1>{item.title}</h1>
                        <Star rating={4}></Star>
                        <p>{item.category}</p>
                        <h2>${item.price}</h2>
                        <button>remove</button>
                    </div>
                </div>
            })
        }

    </div>
  )
}

export default Cart