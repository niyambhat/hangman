import React, { createContext, useState } from 'react';

const GameContext = createContext();

function GameProvider(props) {
  const [data, setData] = useState();
  const [gameData, setGameData] = useState()
  const [gameStarted, setGameStarted] = useState(Boolean(localStorage.getItem("hasGameStarted")) || false );
  const [answer, setAnswer] = useState("");
  const [userInput, setUserInput] = useState()
  const [chancesLeft, setChancesLeft] = useState(5);
  const [level, setLevel] = useState({ id: 0, ans: '' });
  const [win, setWin] = useState();


  return (
    <GameContext.Provider value={{ data, setData,gameData, setGameData, gameStarted, setGameStarted, level, setLevel, chancesLeft, userInput, setUserInput}}>
      {props.children}
    </GameContext.Provider>
  );
}

export { GameContext, GameProvider };