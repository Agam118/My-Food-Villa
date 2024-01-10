import React , {lazy , Suspense , useState} from "react";
import ReactDOM from "react-dom/client";
// default import
import Header from "./components/Header";
// name'd import
//import {Title} from "./components/Header"; 
// or use in 1 line 
//import Header , {Title} from "./components/Header";
// if want to import every component
//import * as Obj from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu" ; 
import About from "./components/About";
import Error from "./components/Error";
import Profile from "./components/Profile";
import QuesandAns from "./components/QuesandAns";
import SearchBar from "./components/SearchBar";
import UserContext from "./Utils/UserContext";
import {Provider} from "react-redux" ; 
import Cart from "./components/Cart" ; 
import store from "./Utils/store";

// doing lazy loading where i am importing // also known  as dynamic import  // chinking // code splitting // dynamci import 

const Instamart = lazy( () => import("./components/QuesandAns"))  ;
// but this is slow at time of loading so we use suspense to avoid any render error // component not found 

 

/**
 * Header 
 *  -Nav Bar
 * Body
 *  -Search Bar
 *  -Cards
 *     -Image
 *     -Rating
 *     -Info
 * Footer
 *  -CopyWrite
 */

// data that is store in form of json file 
// generally in form of array of objects 
const AppLayout = () => {
  
  const [ user , setUser] = useState({
    name : "akhand",
    email : "akhand@gmail.com",
  }) ; 

  return(
    <Provider store={store}>
   { //<UserContext.Provider value={{user : user, setUser}}>   </UserContext.Provider>
   }
     <Header/>
     <Outlet/>
     <Footer />
     </Provider>
  ); 
}

const appRouter = createBrowserRouter([
  // list of path and their element 
  // config 
   {
     path : "/",
     element : <AppLayout />,
     errorElement : <Error /> , 
     children : [
      {
        path : "/about",
        element : <About />, 
        children : [
          {
           path : "profile" ,
           element : <Profile /> 
          }
        ]
      },
      {
        path : "/",
        element : <Body />
      },  
      {
        path : "/search",
        element : <SearchBar/>
      }, 
      {
        path : "/restaurant/:id",
        element : <RestaurantMenu />
      },
      {
        path : "/quesandans",
        // fallback is prop when the another js file is not loaded it will show // use shimmer instead in future reference 
        element : <Suspense fallback={<h1>Wait..Loading...</h1>}><QuesandAns /></Suspense>
      },
      {
        path : "/cart",
        element : <Cart />
      }
     ] 
     // this will load error page incase of any error 
   }, 
])
// reactdom will create a root element in document 
const root = ReactDOM.createRoot(document.getElementById("a")) ; 

// inside the root element container element will be placed 
// updating in dom is known as render 

// rendering a component 
root.render(<RouterProvider router={appRouter} />) ;  

// props drilling is good but 
// if there is usecase when want to send data to every where in the web app 
// then instead so much props drilling store data in seperate / centeral space
