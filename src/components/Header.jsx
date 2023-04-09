import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/foodhub-logo.png";

const Title = () => (
    <a href="/">
    <img
    id="logo"
    // src="https://www.tr2creative.co.uk/wp-content/uploads/2020/11/foodhub-svg.svg"
    src= {Logo}
    alt="Food Hub Logo"
    key="img"
    >
    </img>
    </a>
);

const HeaderComponent = () =>  {
  const [loggedIn, setLoggedIn] = useState(false)
  
  return (
    <>
    <div className="header">
      <Title />
     <div className="nav-items">
       <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/contact">Contact</Link></li>
         <li>Cart</li>
       </ul>
      </div>
       {
        (loggedIn) ? (
          <button onClick={()=> setLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={()=> setLoggedIn(true)}>Login</button>
        )
       }
    </div>
    </>
  )
  }

export default HeaderComponent;