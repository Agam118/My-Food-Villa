import { Filter } from "../Utils/helper";
import { useState , useEffect } from "react" ;
import RestCard from "./RestCard"; 
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../Utils/contants";




const SearchBar = () => { 

  const [restList , setrestList] = useState([]) ;
  const [newList , setNewList] = useState([]) ; 
  const [searchInput , setSearchInput] = useState() ; 
  const [fullrestList , fullsetrestList] = useState([]) ; 
  const [truef , setTrue] = useState("false") ; 
  const [positionObj, setPositionObj] = useState({
        position: null,
        error: null,
        modal: true
    });

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                fetch(`https://restaurants-api-9zvz.onrender.com/restaurants?lon=${position.coords.longitude}&lat=${position.coords.latitude}`)
                    .then(response => response.json())
                    .then(data => {
                        fullsetrestList(data);
                        setNewList(data) ; 
                    })
            }, (err) => {
                setPositionObj((positionObj) => ({
                    ...positionObj,
                    error: err
                }))
            })
        } else setPositionObj((positionObj) => ({
            ...positionObj,
            error: "Geolocation is not available in this browser"
        }))
    }, []);
    

return (
  <div className="mt-[120px]">
   <div className = "p-5 bg-gray-50 flex justify-center">
    <input 
    
     data-testid = "event" 
     className="bg-gray-200 hover:shadow-xl w-80 h-10 m-3"type="text" 
     placeholder="search" 
     value={searchInput}
     onChange={(e) => {
       setSearchInput(e.target.value) ; 
     }}/>

    <button data-testid="btn" className=" p-3 m-2 bg-green-700 hover:bg-green-900 text-white rounded-xl text-sm" onClick={() => {
      const data = Filter(searchInput , fullrestList)
      setrestList(data) ; 
    }}>Search</button>
    </div>
    <div className="flex justify-center m-2">
      {
         newList.slice(0,5).map((restaurant) => { 
           return <Link to={"/restaurant/" + restaurant.data.id } key={restaurant.data.id}><img className=" w-[80px] h-[80px] rounded-full object-[80%_-0px]  m-3" src= {IMG_CDN_URL + restaurant.data.cloudinaryImageId} /><h1 className="font-bold pl-5">{restaurant.data.cuisines[0]}</h1></Link>
         })
      }
    </div>
    <div data-testid = "food" className="flex flex-wrap">
      { 
         restList.map((restaurant) => {
           return <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}><RestCard {...restaurant.data} /></Link>
        })
      }
     </div>
   </div>
);
}


export default SearchBar ; 