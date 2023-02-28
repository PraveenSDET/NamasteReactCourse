import { useState } from "react";

const Title = () => (
    <a href="/">
    <img
    id="logo"
    src="https://www.tr2creative.co.uk/wp-content/uploads/2020/11/foodhub-svg.svg"
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
         <li>Home</li>
         <li>About</li>
         <li>Contact</li>
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