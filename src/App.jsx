import { createElement as ce }  from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/Body";
import HeaderComponent from "./components/Header";

const AppLayout = () => (
  <>
    <HeaderComponent />
    <BodyComponent />
  </>
  /**
   * Header
   *  -- Logo (Left side)
   *  -- Navigation bar (Right side)
   *    -- Home
   *    -- About us
   *    -- Cart
   * Body
   *  -- Search bar
   *  -- Restaurant list
   *    -- Restaurant card
   *    -- Image
   *    -- Cuisines
   * Footer
   */
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <AppLayout />);
