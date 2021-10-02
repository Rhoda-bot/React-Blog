
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { render } from 'react-dom';
import { BrowserRouter, Route, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import BlogPage from './Components/BlogPage';
import SignInForm from './Components/Form';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ViewBlog from './Components/ViewBlog';



const App=()=> {

  const [allUsers, setAllUsers] = useState([]);
  let [loggedInUser,setLoggedInUser] =useState([]);
  let [navigate,setNavigate] =useState(true);

  const [verify,setVerify] =useState(false)


  const saveAllUsers =users=>{
    setAllUsers([...allUsers,users]);
    // localStorage.setItem("AuthorisedUser",JSON.stringify([users]))
   let store = JSON.parse(localStorage.getItem("AuthorisedUser"))||[];
    store = users;
   let newStore =[...allUsers,store]
   localStorage.setItem("AuthorisedUser",JSON.stringify(newStore))

  }
  const checkLoggedIn=user=>{
    let getStorage = JSON.parse(localStorage.getItem("AuthorisedUser")) || [];
    let finder = getStorage.find(val=>val.Email===user.Email &&val.Password===user.password)
    
    if (finder.Email==user.Email && finder.password==user.password) {
      console.log("valid user");
      setLoggedInUser(finder);
      setVerify(true);
      setNavigate(false);
      
      
    }else if(finder.Email!==user.Email && finder.password!==user.password){
  
      console.log("invalid user");
    }

  }
  const loggedIn=()=>{
    if ( !loggedInUser && navigate===true) {
      return(
        <>
     

        
        </>
      )
    }
    else{
      
      return(
        <>
        <Route  path="/blog" render={props=><BlogPage {...props}/>}/>
        <Route path="/post/:id" render={props=><ViewBlog {...props} />}/>
        <Route path="/home" render={props=><Home {...props}/>}/>
        <Route path="/signup"  render={props=><SignUp {...props} saveAllUsers={saveAllUsers}/>}/>
        <Route path="/signin" render={props=><SignIn {...props} checkLoggedIn={checkLoggedIn} verify={verify}/>}/>
    
      </>
    )
  }
  }
  
  return (
    <>
    <Navbar loggedIn={loggedIn}/>
 
   


    <Switch>
      {loggedIn()}
      {/* <ViewBlog/> */}
      </Switch>
</>
  )
}

export default App;
