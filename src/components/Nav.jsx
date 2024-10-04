import React from "react";
import { Link } from "react-router-dom";


const Nav =()=>{
    return(
      <div className="App">
        <ul className="main-nav nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">Details</Link>
          </li>
          <li>
            <Link to="/preview">Preview Image</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        
      </div>
    )
}
export default Nav;