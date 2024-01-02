import { useContext } from "react"
import Store from "../context/store"
import CartProduct from "../components/CartProduct"

const Cart = () => {

    const { cart , setCart } = useContext(Store)

    function removeItem(id){
        // some logic for deleting item from an array
        
    }

  return (
    <div className="cart-wrapper">
        <h1>Cart</h1>

        


        {
            ( cart.length == 0  ) ?
            "Cart is empty"
            :
            cart.map((item ) => {
                return <CartProduct {...item} removeItem={ removeItem }/>
                // return <div className={styles.cartDiv} key={item.id}>
                //     <img src={item.image} alt="" />
                    
                //     <div>
                //         <h1>{item.title}</h1>
                //         <Star rating={4}></Star>
                //         <p>{item.category}</p>
                //         <h2>${item.price}</h2>
                //         <button>remove</button>
                //     </div>
                // </div>
            })
        }

    </div>
  )
}

export default Cart