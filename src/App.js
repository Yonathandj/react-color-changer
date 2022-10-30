import React, { useState } from "react";
import SetColor from "./components/SetColor";
import ShowColor from "./components/ShowColor";

function App() {

  const [Color, setColor] = useState("")

  return (
    <div className="App">
      <ShowColor Color={Color}/>
      <SetColor setColor={setColor} Color={Color}/>
    </div>
  );
}

export default App;
