import React from "react";
import {Link, NavLink} from 'react-router-dom'
 const SignedOutLinks = () =>{
    return(
        <ul className="right">
            <li><NavLink to='/'>Sign Uo</NavLink></li>
            <li><NavLink to='/'>Log In</NavLink></li>
            
        </ul>
    )
 }

 export default SignedOutLinks