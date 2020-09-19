// Step 4 - Create Greeting component
// Step 6 - Add props & props.name into Greeting
// ICE

import React from "react";
// (paramOne, paramTwo, parm) ---> JS. React takes prop attributes in JSX and translates it into key/value pairs inside of props object!
// props => {name: "Emily", profession: "UI/UX Engineer"}
const Greeting = props => {
  console.log("props", props); // see all key value pairs passed from App.js declaration of <Greeting ....
  if (props.banana) {
    props.banana(); // example of executing a function from parent in the child.
  }

  return (
    <h1>
      Welcome {props.name} the {props.profession}
    </h1>
  );
};

export default Greeting;
