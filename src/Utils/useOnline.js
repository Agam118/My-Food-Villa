import { useState , useEffect } from "react";

const useOnline = () => {
   
    const [ check , useCheck] = useState(true) ; 
        // we want to load it just once 

         useEffect(() =>{ 

        window.addEventListener("online" , ()=>{
             useCheck(true) ; 
        });

        window.addEventListener("offline" , ()=>{
             useCheck(false) ; 
        });

        // un-mounting
        /*return () =>{ 

            window.removeEventListener("online" , ()=>{
                useCheck(true) ; 
           });
   
           window.removeEventListener("offline" , ()=>{
                useCheck(false) ; 
           });
   
        }*/

        } , [] ) ; 

    return check ; 
}

export default useOnline ; 