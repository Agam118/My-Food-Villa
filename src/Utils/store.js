import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
     reducer : {
        cart : cartSlice, 
     }
}) ; 

export default store ; 

// we need to tell react that hey we have store from which you can interact so that is why we provide it 
// we will configure it by slicing the store 
// it is done in cartSlice.js file