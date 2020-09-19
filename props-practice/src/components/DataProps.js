// Step 2: Create DataProps Component & export component
// Step 12 - Update DataProps to use props in Component to read each data item in a <ul>
// Step 13 - Add key

// Imports Component Export
import React from "react";

const DataProps = props => {
  // this shows that we're going from ["", ... ] to [React.element, ...]
  console.log(
    props.utah.map(placeStr => {
      return <li>{placeStr}</li>;
    })
  );

  // when you render an array of react.elements (anytime you use .map to create react elements in JSX),
  // you will need to use "key" so that React can identify each child element uniquely
  // props.utah IS AN ARRAY so we can call any ARRAY function. .map is available to us because props.utah is of the array type
  return (
    <ul>
      {props.utah.map((placeStr, index) => {
        return <li key={index}>{placeStr}</li>;
      })}
    </ul>
  );
};

export default DataProps;

/*
export default function DataProps() {
  return <div>DataProps</div>
}
*/
