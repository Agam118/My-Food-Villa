import { IMG_CDN_URL } from "../Utils/contants";
import {useSelector , useDispatch } from "react-redux";
import { addItem , removeItem } from "../Utils/cartSlice";

const MenuCard = ({ id, name, price, description, cloudinaryImageId, category, attributes }) => { 

const  data = useSelector( store => store.cart.items) ; 

const dispatch = useDispatch(); 

const indx = data.findIndex(item => item.id === id);

const handleAddItem = (condition) => { 
    
    const json = {
       'id' : id , 
        'name' : name,
        'price' : price,
        'description' : description,
        'category' : category,
        'attributes' : attributes,
    }

    if(condition === '+') dispatch(addItem(json)) ; 
    else dispatch(removeItem(json)) ; 
}



 return ( 
    <div className=" m-8">
    <div className="flex justify-between p-2 text-lg"> 
       <div>
       <div className='{attributes.vegClassifier === "VEG" ? "bg-[#0f8a65]" : "bg-[#e43b4f]" }'></div>
       <div className="text-2xl font-bold">{name}</div>
       <div className="font-bold">{category}</div>
       <div>₹{price/100}</div> 
       <div className="text-sm">{description}</div>
       </div>
       <div className="w-auto h-[200px]">
       <img className="table pr-80 p-2 m-0 h-[100%] w-[100%] "src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
       <div className="flex align-center justify-center align-center w-[50%]">
       {
         indx === -1 ? 
        ( 
         <button className="pl-2 font-bold text-lg border-solid border shadow-lg text-green-600" 
         onClick={() => {handleAddItem("+") }}>ADD+</button>
        )
        :
        (
         <div className="flex shadow-lg">
         <button className="pl-2 font-bold text-lg  text-green-600" 
          onClick={() => {handleAddItem("+") }}>+</button>
          <div className="pl-2 font-bold text-lg  text-green-600">{data[indx].cnt}</div>
          <button className="pl-2 pr-2 font-bold text-lg  text-red-600"
          onClick={() => {handleAddItem("-") }}>-</button>
          </div>
        )
      }
       </div>
       </div>
    </div>
    <hr className="w-3/4 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 "/>
    </div>
 ); 
}

export default MenuCard ; 