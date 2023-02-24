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

const HeaderComponent = () =>  (
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
    </div>
    </>
  )

export default HeaderComponent;