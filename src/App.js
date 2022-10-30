import React, { useState, useEffect, useRef } from "react";
import SetColor from "./components/SetColor";
import ShowColor from "./components/ShowColor";

function App() {

  const [Color, setColor] = useState("")
  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <div className="App">
      <ShowColor Color={Color}/>
      <SetColor setColor={setColor} Color={Color} inputRef={inputRef}/>
    </div>
  );
}

export default App;
