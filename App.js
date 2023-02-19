import { createElement as ce }  from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="title" key="h2">
    Namaste React!
  </h1>
)

const Heading2 = () => (
  <h1 id="title2" key="h2">
    Vanakkam React!
  </h1>
)

const HeadingComponent = () =>  (
  <>
  {Heading2()}
  <Heading2/>
  {heading}
  <h2 id="heading" key="h2">
    Hello React!
  </h2>
  </>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <HeadingComponent />);
