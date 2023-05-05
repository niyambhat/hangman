import "./App.css"
import { GameProvider } from "./GameContext";
import Game from "./Components/Game";
import MemoAdvanced from "./Lessons/MemoAdvanced/MemoAdvanced";
import MemoTraining from "./Lessons/MemoLesson/MemoTraining";
import ContextRenderingLesson from "./Lessons/ContextRerendering/ContextRenderingLesson";

function App() {

  return (
    <div className="App">
      <div className="frame">
      <GameProvider>
      <Game/>
      </GameProvider>
      </div> 
    </div>
  );
}

export default App;
