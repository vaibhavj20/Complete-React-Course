import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 0,
      // count2: 2,
      userInfo: {
        name: "Dummy Name",
        bio: "default",
        login: "xyz",
      },
    };

    // console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child Component Did Mounted");
    const data = await fetch("https://api.github.com/users/vaibhavj20");
    const json = await data.json();
    // console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, bio, login, avatar_url } = this.state.userInfo;
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;

    // console.log("Child Render");
    return (
      <div className="user-card font-Poppins">
        {/* <h1>Count={count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button> */}
        <div className="m-14">
          <img
            src={avatar_url}
            className="h-40 w-40 rounded-full mx-auto shadow-md border-4 border-white hover:shadow-xl"
          />
          <h2 className="font-bold text-xl mt-4 text-Dark-Brown text-center">
            Name - {name}
          </h2>
          <h3 className="font-semibold text-lg mt-2 text-Medium-Brown text-center">
            Bio - {bio}
          </h3>
          <h4 className="font-medium text-md mt-2 text-gray-500 text-center">
            Username - {login}
          </h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
