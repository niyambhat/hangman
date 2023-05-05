import "./App.css"
import { GameProvider } from "./GameContext";
import Main from "./Components/Main";
import MemoAdvanced from "./Lessons/MemoAdvanced/MemoAdvanced";
import MemoTraining from "./Lessons/MemoLesson/MemoTraining";
import ContextRenderingLesson from "./Lessons/ContextRerendering/ContextRenderingLesson";

function App() {

  return (
    <div className="App">
      <div className="frame">
      <GameProvider>
      <Main/>
      </GameProvider>
      </div> 
    </div>
  );
}

export default App;
