import { TiStarFullOutline } from "react-icons/ti";

function Star({ rating }){

    return <span style={{ color : "#f0dc82" }}>
        {
            [...Array(rating)].map((_  , index)=>{
                return <TiStarFullOutline key={index}/>
            })
        }
    </span>

}

export default Star