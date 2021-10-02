import { useState } from "react"
import { Redirect } from "react-router"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import Input from "./Input"

const SignUp =({saveAllUsers})=> {
let [signForm, setSignForm] = useState([
    {type:"text",value:"firstname"},
    {value:"Lastname",type:"text"},
    {value:"Email",type:"email"},
    {value:"Phone:",type:"number"},
    {value:"Password",type:"password"},
])
let history = useHistory();
let [signArr, setSignArr] =useState({})
const setInputValue =(key,val)=>{
    let newSignArr = {...signArr};
    newSignArr[key]=val;
    setSignArr(newSignArr)
 
    
}
const handleSignup=p=>{
    p.preventDefault();
    saveAllUsers(signArr);
//   console.log(signArr.Email);
    if (signForm.Email!==signForm.Email) {
        console.log("jdjsj");
    }
    // if ((signArr.firstname ==="" &&signArr.Lastname==="" && signArr.Email==="" &&signArr.Password===""&& signArr.Phone)) {
    //     console.log(signArr.firstname);
    // }else{
    //     <Redirect to={"/home"}/>
    // }
// let n ={...signArr}
// setSignArr(n)
// saveAllUsers(n)
}
    return (
        <>
       
                            
          {signForm.map((data,index)=>(
              <div className="container">
                    <div className="row">
                            
                        <div className="card col s5 z-depth-2">
                        {/* <h5>Sign Up Here</h5> */}
                        <div key={index}>
                        <Input registeredUser={data} setInputValue={setInputValue}/>
                        </div>
                        </div>
                    </div>
                </div>
          ))}
          <button onClick={handleSignup} className="btn waves-effect waves-light #bbdefb blue lighten-4">SIGN UP</button>  
        </>
    )
}

export default SignUp
