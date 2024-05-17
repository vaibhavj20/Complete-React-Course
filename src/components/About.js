import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// const About = () => {
//   return (
//     <div>
//       <h2>Hello Everyone,</h2>
//       <User name={"Vaibhav Jamdhade(function)"} location={"Nashik(fn)"} />
//       <UserClass name={"Vaibhav Jamdhade(Class)"} location={"Mumbai(class)"} />
//     </div>
//   );
// };

// export default About;

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mounted");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h2>Hello Everyone,</h2>
        {/* <User name={"Vaibhav Jamdhade(function)"} location={"Nashik(fn)"} /> */}
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass
          name={"Vaibhav Jamdhade(Class)"}
          location={"Mumbai(class)"}
        />
      </div>
    );
  }
}

export default About;
