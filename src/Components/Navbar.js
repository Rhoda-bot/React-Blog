import React from 'react'
import { Link } from 'react-router-dom'
const Navbar=({loggedIn}) =>{
    return (
        <>
                <nav className="nav-extended #82b1ff blue accent-2">
                <div className="nav-wrapper">
                {/* <a href="#" class="brand-logo">Logo</a> */}
                <span className="brand-logo">BB trends</span>
                <span href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
     
                 </ul>
    </div>
  
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        {
          loggedIn?
          <>
          <ul>
          <Link to={"/home"} className="tab"> Home Page</Link>
          <li className="tab"><Link to={"/signin"} className="tab">  Login Page</Link></li>
          <li className="tab"><Link to={"/signup"} className="tab">Register Page</Link></li>
          </ul>
          <li className="tab"><Link to={"/blog"} className="tab"> Blog Page</Link> </li>
          </>:
          <>
          </>
        }
        {/* <Link to={"/signup"} className="tab">Register Page</Link>
      <Link to={"/signin"} className="tab">  Login Page</Link>
      <Link to={"/blog"} className="tab"> Blog Page</Link> 
      <Link to={"/home"} className="tab"> Home Page</Link>  */}

    </ul>
    </div>
  </nav> 
        </>
    )
}

export default Navbar
