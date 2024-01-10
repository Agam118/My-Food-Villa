import RestCard from "./RestCard";
import {useContext, useEffect, useState} from "react" ; // name'd  import
import { Link } from "react-router-dom"; 
import  useOnline  from "../Utils/useOnline" ; 
import Shimmer from "./Shimmer"  ; 
import UserContext from "../Utils/UserContext";

const Body = () => {

    // local text variable 
    // useState is react-hook which is just a function 
    // useSate is use to create state var in react.js
    const {user , setUser} = useContext(UserContext) ; 
    const [restList , setrestList] = useState([]) ; 
    const [positionObj, setPositionObj] = useState({
        position: null,
        error: null,
        modal: true
    })

    useEffect(() => {
      if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(async (position) => {
              fetch(`https://restaurants-api-9zvz.onrender.com/restaurants?lon=${position.coords.longitude}&lat=${position.coords.latitude}`)
                  .then(response => response.json())
                  .then(data => {
                      setrestList(data);
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
  }, [])  

     const offline = useOnline() ; 

     if(!offline)
     {
        return <h1 className="font-bold mt-72" > 🔴 Offline, please check your internet connection</h1>
     }
    else{
    return restList.length === 0 ? <Shimmer /> : (
      <div>
      <div data-testid="data" className="flex flex-wrap mt-[100px]">
      { 
         restList.map((restaurant) => {
           return <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}><RestCard {...restaurant.data} /></Link>
        })
      }
     </div>
     </div>
    ) ;
}}

export default Body ; 