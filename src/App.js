import { useState } from "react";

export function replaceCamleWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disable, setDisable] = useState(false);

  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: disable ? "gray" : buttonColor }}
        disabled={disable}
      >
        change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        defaultChecked={disable}
        id="disable-button-checkbox"
        aria-checked={disable}
        onChange={(e) => setDisable(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
