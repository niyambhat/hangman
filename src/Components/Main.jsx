import React, {useContext, useState} from "react"
import NewGameScreen from './NewGameScreen'
import { GameContext } from "../GameContext"
import SorryScreen from "./Modals/SorryScreen"
import GameFrame from "./GameFrame"

function Main() {
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
export default Main