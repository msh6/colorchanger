import ColorBlock from "./ColorBlock";
import ColorInput from "./ColorInput";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState();
  const [hexValue, setHexValue] = useState();
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <Header title="Color Changer" />
      <ColorBlock
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <ColorInput
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
