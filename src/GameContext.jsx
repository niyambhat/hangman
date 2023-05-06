import React, { createContext, useState } from 'react';

const GameContext = createContext();

function GameProvider(props) {
  const [data, setData] = useState();
  const [gameData, setGameData] = useState()
  const [gameStarted, setGameStarted] = useState(Boolean(localStorage.getItem("hasGameStarted")) || false );
  const [answer, setAnswer] = useState("");
  const [chancesLeft, setChancesLeft] = useState(5);
  const [level, setLevel] = useState({ id: 0, ans: '' });
  const [win, setWin] = useState();
  const [keyPressed, setKeyPressed] = useState('');
  const [keyBoardIsActive, setKeyBoardIsActive] = useState(true)

  return (
    <GameContext.Provider value={{ data, setData,gameData, setGameData, gameStarted, setGameStarted, level, setLevel, chancesLeft, keyPressed, setKeyPressed}}>
      {props.children}
    </GameContext.Provider>
  );
}

export { GameContext, GameProvider };