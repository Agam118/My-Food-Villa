import { createContext } from "react";

// context is a function at the end 
// it takes deault value 
// context API is used to transfer data to every component without component drilling 
// golbal declration of variable which is manages by react 

const UserContext = createContext({ 
 user:{
    name : "agam",
    email : "agam@gmail"
  }
})

export default UserContext ; 