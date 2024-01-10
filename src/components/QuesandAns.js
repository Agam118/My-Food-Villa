import { useState } from "react";

// building our own accordion  

const  Section = ({title , description , isShow , SetShow }) =>{ 
      
    const [ new1 , setNew1] = useState(isShow) ; 
    return (
      <div className="border border-black p-2 m-2">
      <h3 className="font-bold">{title}</h3>
      { new1 ? ( 
       <button 
          onClick={() => { setNew1(false) }}
          >
             Hide 
            </button>
            ) : (
            <button 
            onClick={() => {SetShow(true)}}
            >
              Show
            </button>
      )}
       { new1 && <p>{description}</p>}
      </div>
    );
} ;

const QuesandAns = () => { 

  // giving parent the control 
  // lifting the state up // 

  // it's lengthy way 
   
  /* const [parent , setParent] = useState({
      ques1 : false ,
      ques2 : false , 
      ques3 : false ,
   })*/

   const [ visible , setVisible] = useState("") ; 
   return (
     <div className="mt-[120px]">
     <h1 className="text-3xl p-2 m-2 font-bold">Frequent Ques Asked</h1>
     <Section 
            title={"did your food remain hot ?"} 
            description={"yah !! generally reamin hot because of our fast delivery boys Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."}
            isShow = {visible === "ques1"} 
            SetShow = { () => {  setVisible("ques1") } }
           
           />
     <Section 
            title={"what kind of offer did you give to users who are new  ?"} 
              description={"we gave them free delivery with 50% off on first food order Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."}
            isShow = { visible === "ques2"}
            SetShow = {() => { setVisible("ques2")}} 
           />
      <Section 
            title={"If we want to contact you where to message ?"} 
            description={"we gave them free delivery with 50% off on first food order Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."}
            isShow = { visible === "ques3"}
            SetShow = {() => { setVisible("ques3")}}
    
           />
    </div>
   ); 
}

export default QuesandAns ; 