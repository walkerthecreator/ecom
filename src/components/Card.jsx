import { useContext } from "react";
import truncate from "../utils/truncate";
import Star from "./Star";
import Store from "../context/store";

function Card({ onClick ,  title , price, category , description , image  , rating , id , handleAddToCart }){

    

    return <div className="card" onClick={onClick}>
        <img src={image} alt="" />
            <h1>{ truncate(title , 22) }</h1>
            <div className="card-price">

            <span id="price">$ { price }</span>
            <p>
                <Star rating={ Math.round(rating.rate) }></Star>

                { rating.rate } ({ rating.count })</p>
            </div>
            <button onClick={ ()=> { handleAddToCart({title, price, category, description, image , rating , id}) } }>Add to cart</button>
    </div>
}

export default Card