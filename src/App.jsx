import { useState } from "react";
import "./App.css";
import Gameplay from "./components/Gameplay";
import StartGame from "./components/StartGame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameplay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <Gameplay /> : <StartGame toggle={toggleGameplay} />}</>
  );
}

export default App;
