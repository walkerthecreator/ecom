import { useContext } from "react";
import truncate from "../utils/truncate";
import Star from "./Star";
import Store from "../context/store";

function Card({ onClick ,  title , price, category , description , image  , rating , id , handleAddToCart }){

    

    return <div className="card" >
        <img src={image} alt="" onClick={onClick}/>
            <h1 onClick={onClick}>{ truncate(title , 22) }</h1>
            <div className="card-price" onClick={onClick}>

            <span id="price">$ { price }</span>
            <p>
                <Star rating={ Math.round(rating.rate) }></Star>

                { rating.rate } ({ rating.count })</p>
            </div>
            <button onClick={ ()=> { handleAddToCart({title, price, category, description, image , rating , id}) } }>Add to cart</button>
    </div>
}

export default Card