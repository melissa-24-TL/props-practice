import React, { useState } from "react";
// Step 1 - import data.js

// To import default data, use a variable name of your choice at that file path
// to import default data AND named imports, separate via a comma and collect your named imports inside of { }
import apple, { placesInUtah, nameOfTeacher, hotspotsInSLC } from "../data"

// When you import a component, the component file MUST have a "export default" on that file page
import DataProps from "./DataProps"
import Greeting from "./Greeting"


const App = () => {
  console.log('apple', apple) // [] --> defaultVar in data.js file
  console.log('placesInUtah', placesInUtah) // ["", ...]

  const [places, setPlaces] = useState(placesInUtah) // anytime we import or access data from server, SAVE IN STATE
  
  return (
    <div>
      <h1>This is our new app</h1>
      {/* Step 3: Bring DataProps into App.js */}
      {/* Step 11 - Pass data from App into DataProps */}
      {/* Pass STATE of data from parent (App) into child (DataProps) */}
      <DataProps utah={places} />
      {/* Step 5 - import Greeting into App & add multiple*/}
      {/* Anytime you are passing data that IS NOT A STRING, you must pass in {} to the prop */}
      <Greeting name="Melissa" profession="Web Developer" favNumber={24} isPennyRed={true} />
      {/* A react shorthand for passing booleans is that if just a prop name is passed (not equal to anything), it defaults to a true boolean */}
      <Greeting name="Bob" profession="Plumber" isPennyRed />

      {/* You can pass a function from p -> c and then call that function inside of the child! */}
      <Greeting name="Dan" profession="Data Analyst" banana={() => console.log('clicked!')} />
      {/* SEE NOTES FOR: Step 8 - add PersonDescription (s) to App */}
      {/* SEE NOTES FOR: Step 9 - Create props for PersonDescription and render them */}
    </div>
  );
};
export default App;
