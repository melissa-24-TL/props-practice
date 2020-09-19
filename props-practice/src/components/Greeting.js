import React from "react";

const Greeting = props => {
  console.log(props);
  return <h1>Welcome {props.name}</h1>;
};

export default Greeting;
