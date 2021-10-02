import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Input from './Input'
import  './SignIn.css'


const SignIn=({checkLoggedIn,verify})=> {
    let [loginUser] =useState([
        {type:"email",value:"Email"},
        {type:"password",value:"password"},
        
    ])
    let history =useHistory();
    let [signArr, setSignArr] = useState({})
    const setInputValue =(key,val)=>{
        let newSignArr = {...signArr};
        newSignArr[key]=val;
        setSignArr(newSignArr)
     
        
    }
    const handleLoggedIn=()=>{
    checkLoggedIn(signArr)
    let getLoggedInUser =JSON.parse(localStorage.getItem("AuthorisedUser")) || [];
    if (getLoggedInUser[0].Email===signArr.Email && getLoggedInUser[0].Password===signArr.password) {
          console.log("verified");
        verify=false;
        console.log(verify);
        // history.push("/blog");
    }

      
    }
    return (
        <>
           {loginUser.map((user,index)=>(
               <div className="container">
                 <div className="row">
                     <div className="card col s5 z-depth-2">
                     <form >
                    {/* {err} */}
                 <h5>Sign In </h5>
                    <div key={index}>
                    <Input registeredUser={user} setInputValue={setInputValue}/>
                     </div>
                    </form>
                     </div>
                 </div>
             </div>
           ))}
           <div className="button-wrap" >
           <button id="button" onClick={handleLoggedIn} className="btn waves-effect waves-light #bbdefb blue lighten-4">Login here</button> 
           </div>
        </>
    )
}

export default SignIn
