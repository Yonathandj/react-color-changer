import React, { useState, useEffect, useRef } from "react";
import SetColor from "./components/SetColor";
import ShowColor from "./components/ShowColor";

function App() {

  const [color, setColor] = useState("");
  const [colorHex, setColorHex] = useState("");
  const [colorText, setColorText] = useState(true);

  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <div className="App">
      <ShowColor 
        color={color}
        colorHex={colorHex}
        colorText={colorText}
        />
      <SetColor 
        color={color} 
        colorText={colorText}
        setColor={setColor} 
        setColorHex={setColorHex}
        setColorText={setColorText}
        inputRef={inputRef}/>
    </div>
  );
}

export default App;
