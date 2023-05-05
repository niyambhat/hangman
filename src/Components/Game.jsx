import React, {useContext, useState} from "react"
import NewGameScreen from './NewGameScreen'
import Box from "./Box"
import { GameContext } from "../GameContext"
import SorryScreen from "./SorryScreen"
import GameFrame from "./GameFrame"

function Game() {
const {gameStarted, chancesLeft} = useContext(GameContext)
return (
  <>
    {gameStarted ? (
      chancesLeft > 0 ? <GameFrame/> : <SorryScreen />
    ) : (
      <NewGameScreen />
    )}
  </>
)}
export default Game