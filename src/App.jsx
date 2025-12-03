import { useState } from "react";
import MoodButton from "./MoodButton";
import CountLabel from "./CountLabel";
import ColorSwitch from "./ColorSwitch";

function App() {
  // - Crétation du state "actualMood", on donne deux variables :
  // - Une pour la lecture => actualMood
  // - Une pour changer la valeur de atualMood (fonction) =>
  // setActualMood
  const [actualMood, setActualMood] = useState("👽");
  const [displayMood, setDisplayMood] = useState(true);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const [boxColor, setBoxColor] = useState("#ffffff");

  const handleToggleDisplayMood = () => {
    setDisplayMood((previousState) => (previousState === true ? false : true));
    // if(previousState === true ) {
    //   return false
    // }
    // else {
    //   return true
    // }
  };

  const handleKeyDown = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <div
        className="card"
        style={{
          backgroundColor: boxColor,
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <header>
          <h1>Mood du jour</h1>
          {/* Affichage du state "actualMood" à l'intérieur du HTML */}
          {displayMood ? <p id="mood">{actualMood}</p> : "Le mood est caché 🥷"}
          {/* On passe en props: Le mood du bouton + a la fonction pour modifier le state
    "actualMood " */}
        </header>
        <div id="mood_buttons_list">
          <MoodButton mood="😃" setActualMood={setActualMood} />
          <MoodButton mood="🥲" setActualMood={setActualMood} />
          <MoodButton mood="🤪" setActualMood={setActualMood} />
          <MoodButton mood="😁" setActualMood={setActualMood} />
          <MoodButton mood="🤣" setActualMood={setActualMood} />
          <MoodButton mood="😇" setActualMood={setActualMood} />
          <MoodButton mood="🫡" setActualMood={setActualMood} />
          <MoodButton mood="📎" setActualMood={setActualMood} />
          <MoodButton mood="😎" setActualMood={setActualMood} />
          <button onClick={handleToggleDisplayMood}>
            {displayMood ? "Désactiver" : "Activer"}
          </button>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <CountLabel count={count} />
          <input type="text" value={input} onChange={handleKeyDown} />

          <div
            id="color_random"
            style={{
              padding: "10px",
              borderRadius: "10px",
              display: "flex",
            }}
          >
            <ColorSwitch onChangeColor={setBoxColor} />
          </div>
          <p>{input}</p>
        </div>
      </div>
    </>
  );
}

export default App;
