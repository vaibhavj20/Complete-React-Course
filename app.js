// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     xyz: "vaby",
//   },
//   "Hello World From React"
// );
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World"),
    React.createElement("h2", { id: "heading2" }, "Hello React"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World"),
    React.createElement("h2", { id: "heading2" }, "Hello React"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
