import { Link, useNavigate } from "react-router-dom"
import Store from "../context/store"
import { useContext } from "react"
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";


function NavBar(){

    const {user , setUser , cart } = useContext(Store)
    const navigate = useNavigate()

    function handleSignOut(){
        localStorage.removeItem("user")
        setUser(null)
        navigate('/login')
    }


    return <nav>
        <h2><Link to='/home'>Shopkart</Link></h2>
        <ul>
            <li> <Link to='/'>Shop</Link></li>
            <li> <Link to='/cart'> <FaShoppingCart  /> Cart <span id="cart-count" >{cart.length}</span></Link></li>
            {
                ( user == null ) ? 
                <li><Link to='/login'>login</Link></li>
                :
                <>
                <div style={{ display : "flex " , gap : '10px' , alignItems : "center" }}>
                    <li><MdAccountCircle/>{ user.email }</li>
                    <button id="logout" onClick={ handleSignOut }> logout </button>
                </div>
                </>
            }
        </ul>
    </nav>
}

export default NavBar