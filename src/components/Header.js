// this is exporting by default
import {logo} from "../Utils/contants" ; 
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux"; 


export const Title = () => (
    <Link to="/" >
    <img  data-testid = "logo" className  = "h-28 pl-2" src = {logo} alt="logo"></img>
    </Link>
 ) ; 

 

 const Header = () => {

  const [islogin , isloggedin] = useState(false) ; 

  const {user} = useContext(UserContext) ;  

  const cartItems = useSelector(store => store.cart.items) ; 

  console.log(cartItems) ; 

  return(
    <div>
    <div className = "flex justify-between w-full bg-gray-50 shadow-lg top-0 position : fixed z-10">
       <Title />
      <ul className = "flex py-10 ">
        <li className="px-2 text-xl font-bold hover:text-orange-500"><Link to="/">Home</Link></li>
        <li className="px-2 text-xl font-bold hover:text-orange-500"><Link to="/search">Search<SearchIcon></SearchIcon></Link></li>
        <li className="px-2 text-xl font-bold hover:text-orange-500"><Link to="/cart" data-testid="cartI">Cart-{cartItems.length} items</Link></li>
        <li className="px-2 text-xl font-bold hover:text-orange-500"><Link to="/quesandans">Ques/Ans</Link></li>
      </ul> 
    </div>
    </div>

    );
 };

 export default Header ;  
 // I can export default only 1 thing 
 // 2 components can'st be sent by default 