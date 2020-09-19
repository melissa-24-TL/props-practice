import React, { useState } from "react";
import { placesInUtah } from "../data";
import DataProps from "../components/DataProps";
import Greeting from "../components/Greeting";
import PersonalDescription from "../components/PersonalDescription";

const App = () => {
  const [data] = useState(placesInUtah);

  const favoriteNumber = () => {
    return `fav Number: ${Math.random() * 100}`;
  };

  return (
    <div>
      <Greeting name="Melissa" />
      {/* need {} for JS for props, diff than passing string */}
      <PersonalDescription description="Teach" favoriteNumber={favoriteNumber} />
      <Greeting name="Nasha" />
      <PersonalDescription description="Student" favoriteNumber={favoriteNumber} />
      <Greeting name="Jane" />
      <PersonalDescription description="Student" favoriteNumber={favoriteNumber} />
      <DataProps data={data} />
    </div>
  );
};
export default App;
