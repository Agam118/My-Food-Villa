// here we will also explore class based component
// classBased component did not support hooks 
// so no hooks no useContext() 
 

import UserContext from "../Utils/UserContext";

import React from "react";

class Profile extends React.Component{

    constructor(props){
       super(props) ; 
      
       this.state = {
           userInfo : {
               name : "dummy name" , 
               location : "dummy country",
               avatar_url : "hi"
           }
        }
       
    }
    
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/agam118") ; 
        const json = await data.json() ; 

        this.setState(
          {
            userInfo : json , 
          }
        );
    } 
    render(){  
        return (
          <div className="flex mt-[120px]">
           { 
            /* <UserContext.Consumer> 
            {
               this is how usercontext is used 
               ({user}) => <h4>{user.name}-{user.email}</h4>
               </UserContext.Consumer>
            */
            }
          <div>
             <img className=" h-60" src={this.state.userInfo.avatar_url} />
          </div>
          <div className="p-5">
                <div className="font-bold">{ this.state.userInfo.name} Founder of this food villa application</div>
                <div>I am currently a 4'th year b-tech undergraduate student studying at graphic era university developer of this web application</div>
                <div>I hope you like this application if you want to give any suggestions I am happy to hear</div>
                <div>I am open to work would love to work as a front-end (react-developer) at your firm</div>
                <div className="font-bold p-5">CONTACT INFORMATION</div>
                <div className="flex">
                <spam className="font-bold pl-5 pr-5">Location : {this.state.userInfo.location}</spam>
                <spam className="font-bold pr-5">Age : 21</spam>
                <spam className="font-bold">Email : bajaj.agam.2017305@gmail.com</spam>
               </div>
          </div>
          </div>
        );
    }
}

export default Profile ; 