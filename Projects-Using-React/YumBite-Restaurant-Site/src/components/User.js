import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);

  return (
    <div className="user-card font-Poppins">
      <h1>Count={count}</h1>
      <h2>Name-{props.name}</h2>
      <h3>City-{props.location}</h3>
      <h4>Contact=@vaby20</h4>
    </div>
  );
};

export default User;
