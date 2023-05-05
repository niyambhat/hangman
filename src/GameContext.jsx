import React, { createContext, useState } from 'react';

const GameContext = createContext();

function GameProvider(props) {
  const [gameStarted, setGameStarted] = useState(Boolean(localStorage.getItem("hasGameStarted")) || false );
  const [answer, setAnswer] = useState("");
  const [chancesLeft, setChancesLeft] = useState(5);
  const [level, setLevel] = useState(1);
  const [win, setWin] = useState();
  const [selectedKey, setSelectedKey] = useState("");
  const [keyBoardIsActive, setKeyBoardIsActive] = useState(false)

  return (
    <GameContext.Provider value={{ selectedKey,setSelectedKey,gameStarted, setGameStarted,answer, setAnswer, chancesLeft, setChancesLeft, level, setLevel, selectedKey, keyBoardIsActive,setKeyBoardIsActive }}>
      {props.children}
    </GameContext.Provider>
  );
}

export { GameContext, GameProvider };