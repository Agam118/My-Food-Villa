import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem , removeItem , clearCart } from "../Utils/cartSlice";


const Container = ({ id, name, price, description, cloudinaryImageId, category, attributes }) => {

  const cartItems = useSelector(store => store.cart.items) ; 

  const indx = cartItems.findIndex(item => item.id === id);

  const dispatch = useDispatch(); 

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

 return(
    <div className="flex justify-between p-11">
    <h1 className="text-xl">{name}</h1>
    <div className="flex">
    <h1 className="text-xl mr-2">₹{price / 100 }</h1>
    <div className="flex shadow-lg">
    <button className="pl-2 font-bold text-xl  text-green-600" 
    onClick={() => {handleAddItem("+") }}>+</button>
    <div className="pl-2 font-bold text-xl  text-green-600">{ cartItems[indx].cnt}</div>
    <button className="pl-2 pr-2 font-bold text-xl  text-red-600"
    onClick={() => {handleAddItem("-") }}>-</button>
    </div>
    </div>
    </div>
 ); 

}


const Cart = () =>{ 

    const cartItems = useSelector(store => store.cart.items) ; 
    const totalAmount = cartItems.reduce((acc, currVal) => acc + (currVal.price/100) * currVal.cnt, 0);
    const dispatch = useDispatch() ; 

    const Clear = () => { 
      dispatch(clearCart()) ; 
    }

    let sum = 0 ; 

    return cartItems.length === 0 ? (
         <div>
        <div className="flex align-center justify-center h-[50vh]">
        <img src={"data:image/png;base64,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"} alt="empty-cart" /> 
        </div> 
          <h2 className="font-bold flex justify-center text-3xl m-8 text-green-600">Your Cart is Empty !!</h2>
          <span className="font-bold text-xl flex justify-center ">
          <Link to="/" className="bg-orange-500  hover:bg-orange-700  text-white m-4 p-2">SEE RESTAURANTS NEAR YOU</Link>
          </span>
        </div>
       ) : (
         <>
         <div  className=" border shadow-2xl mt-[120px] mr-[500px] ml-[500px] mb-[150px] " >
         <div className="flex justify-between  mt-5 ml-[20px] mr-[10px] ">
         <div className="font-bold text-2xl">Cart Items</div>
         <button className="font-bold text-lg bg-red-700 text-white p-2 rounded-lg" onClick={() => Clear()}>Clear Cart</button>
         </div>
         <div className="mt-2">{ cartItems.map( item => {
           return <Container key={item.id} {...item} /> })
           }
          </div>
           <hr class=" w-96 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
           <div className="flex justify-between p-11">
            <h1 className="text-xl">To Pay</h1> 
            <h1 className="text-xl font-bold">₹{totalAmount}</h1>
          </div>
          </div>
          </>
       );
}

export default Cart ; 