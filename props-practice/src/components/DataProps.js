import React from "react";

export default function DataProps(props) {
  return (
    <div>
      <h3>List of Utah Places</h3>
      <ul>
        <ul>
          {props.data.map((place, index) => (
            <li key={index}>{place}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
}
