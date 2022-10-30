import React, { useState, useEffect, useRef } from "react";
import SetColor from "./components/SetColor";
import ShowColor from "./components/ShowColor";

function App() {

  const [Color, setColor] = useState("");
  const [colorHex, setColorHex] = useState("");

  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <div className="App">
      <ShowColor 
        Color={Color}
        colorHex={colorHex}
        />
      <SetColor 
        setColor={setColor} 
        Color={Color} 
        setColorHex={setColorHex}
        inputRef={inputRef}/>
    </div>
  );
}

export default App;
