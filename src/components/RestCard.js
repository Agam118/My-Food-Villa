import {IMG_CDN_URL} from "../Utils/contants" ; 
import ReactStars from "react-stars";

const RestCard = ({ name , cuisines , avgRating , cloudinaryImageId  }) => { 

    return (
        <div className = "w-[200px] p-2 m-2 hover:shadow-xl"> 
         <img src= {IMG_CDN_URL + cloudinaryImageId}/>
         <h2 className="font-bold text-xl ">{name}</h2>
         <h3>{cuisines.join(", ")}</h3>
         <ReactStars value={avgRating} size ={24}/> 
      </div>
    );
}

export default RestCard ; 
    