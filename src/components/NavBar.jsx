import { Link, useNavigate } from "react-router-dom"
import Store from "../context/store"
import { useContext } from "react"


function NavBar(){

    const {user , setUser , cart } = useContext(Store)
    const navigate = useNavigate()

    function handleSignOut(){
        localStorage.removeItem("user")
        setUser(null)
        navigate('/login')
    }


    return <nav>
        <h2><Link to='/'>Mystore</Link></h2>
        <ul>
            <li>Shop</li>
            <li> <Link to='/cart'>Cart <span id="cart-count" >{cart.length}</span></Link></li>
            {
                ( user == null ) ? 
                <li><Link to='/login'>login</Link></li>
                :
                <>
                <div style={{ display : "flex " , gap : '10px' , alignItems : "center" }}>
                    <li>{ user.email }</li>
                    <button id="logout" onClick={ handleSignOut }> logout </button>
                </div>
                </>
            }
        </ul>
    </nav>
}

export default NavBar