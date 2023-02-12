const heading1 = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Hey everyone!!!"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "Hey everyone!!!"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
