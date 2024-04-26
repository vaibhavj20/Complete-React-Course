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
      <div className="user-card">
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
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Bio:{bio}</h3>
        <h4>Username:{login}</h4>
      </div>
    );
  }
}

export default UserClass;
