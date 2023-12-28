import { Link } from "react-router-dom"
import Store from "../context/store"
import { useContext } from "react"


function NavBar(){

    const {user} = useContext(Store)

    console.log(user)

    return <nav>
        <h2>Mystore</h2>
        <ul>
            <li>Shop</li>
            <li>Cart</li>
            {
                ( user == null ) ? 
                <li><Link to='/login'>login</Link></li>
                :
                <>
                <button> logout </button>
                <li><Link to='/login'>{ user.email }</Link></li>
                </>
            }
        </ul>
    </nav>
}

export default NavBar