import React from "react";
import ReactDOM from "react-dom/client";

//React Element

// const heading = React.createElement("h1", { id: "heading" }, "Hello Vaibhav❤️");

// console.log(heading);

//react element
const heading = (
  <div>
    <h1>Good Morning,</h1>
  </div>
);
//converted into react component
// |
// |
// ::
//react Component
const ThisIsHeadingComponent = () => (
  <div>
    <h1>Hello My Friends</h1>
  </div>
);

const num = 1000;

const HeadingComponent2 = () => (
  <div className="container">
    {/* component composition */}
    {num}
    {/* <ThisIsHeadingComponent /> */}
    {/* {ThisIsHeadingComponent()} */}
    <ThisIsHeadingComponent></ThisIsHeadingComponent>
    <h1>How are you?</h1>
  </div>
);

// const jsxHeading = <h1 id="jsxHeading">Hello Vaibhav🏆</h1>;

// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
