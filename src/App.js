import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disable, setDisable] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: buttonColor }}
        disabled={disable}
      >
        change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        defaultChecked={disable}
        aria-checked={disable}
        onChange={(e) => setDisable(e.target.checked)}
      />
    </div>
  );
}

export default App;
