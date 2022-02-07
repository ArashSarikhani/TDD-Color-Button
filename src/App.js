import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: buttonColor }}
      >
        change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
