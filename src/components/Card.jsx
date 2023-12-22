import truncate from "../utils/truncate";
import Star from "./Star";

function Card({ title , price , description , image  , rating , id }){

    return <div className="card">
        <img src={image} alt="" />
            <h1>{ truncate(title , 22) }</h1>
            <div className="card-price">

            <span id="price">$ { price }</span>
            <p>
                <Star rating={ Math.round(rating.rate) }></Star>

                { rating.rate } ({ rating.count })</p>
            </div>
            <button>Add to cart</button>
    </div>
}

export default Card