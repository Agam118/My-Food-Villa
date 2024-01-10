import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import ReactStars from "react-stars";
import MenuCard from "./MenuCard" ; 
import { IMG_CDN_URL } from "../Utils/contants";


const RestaurantMenu = () =>{ 

     const {id} = useParams() ; 
     
     // custom hook 
     const restaurant = useRestaurantMenu(id) ; 

  
     return !restaurant ? <Shimmer /> : (   
            <div>
            <div className="flex justify-between  bg-[#001d3d] w-[100%] mt-[120px] h-[250px]">
            <div className="pl-80 p-10">
            <h2 className="text-4xl font-bold text-white">{restaurant.name}</h2>
            <div className="text-l text-white">{restaurant.cuisines.join(' ,')}</div>
            <div className="flex">
            <h3 className="text-l text-white">{restaurant.area}  ,</h3>
            <h3 className="text-l text-white"> {restaurant.city}</h3>
            </div>
            <ReactStars value={restaurant.avgRating} size ={24}/> 
            </div>
            <img className="p-10 pr-80"src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt={restaurant.name} />
            </div>
            <div className=" bg-gray-100">
            <h3 className="text-xl">Recommended</h3>
            <h3 className="font-bold text-2xl">{Object.values(restaurant.menu.items).length} Items</h3>
            <div className="m-[50px] mr-[250px] border-solid border border-zinc-800"> { 
                        Object.values(restaurant?.menu?.items).map(item => {
                            return <MenuCard {...item} key={item.id}/>
                        })
                    }</div>
            </div>
            </div>
     ) 
}

export default RestaurantMenu ; 

 // onclick => dispatch => action => function () [ reducer] => modify cart => useSelector() => update 
