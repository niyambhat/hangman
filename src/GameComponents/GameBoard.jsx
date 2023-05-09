import React, { useEffect, useState } from 'react';
import LevelNavigation from './LevelNavigation'
const styles = {
    hangmanInputLetter: {
      display: "inline-block",
      width: "30px",
      height: "30px",
      border: "1px solid #000",
      borderRadius: "50%",
      textAlign: "center",
      lineHeight: "30px",
      margin: "0 5px",
      fontSize: "1.2em",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  };
function GameBoard({ levelsData }) {
    const [selectedLevelIndex, setSelectedLevelIndex] = useState(0);
    const [selectedLevel, setSelectedLevel] = useState(levelsData[selectedLevelIndex]);
    const [remainingLives, setRemainingLives] = useState(5);
    const [currentWord, setCurrentWord] = useState(selectedLevel.name.toUpperCase())
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [userEntries, setUserEntries] = useState([]);
    const [inputFields, setInputFields] = useState(Array(currentWord.length).fill(null));
    const [nextLevel,setNextLevel] =useState(false)

    useEffect(()=>{
      window.addEventListener('keydown', handleKeyPress);
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      }
    }, [selectedLevel])

    useEffect(()=>{
    setGuessedLetters(inputFields.join(''));
    },[inputFields])

    useEffect(()=>{
    if(guessedLetters == currentWord) {
        setNextLevel(true);
    }
    },[guessedLetters])

    useEffect(()=>{
      setInputFields(Array(currentWord.length).fill(null));
    },[currentWord])

    useEffect(()=>{
    if(remainingLives == 0) {
      alert("Game Over")  
      window.location.reload();
    }
    },[remainingLives])

    useEffect(()=>{
    if(selectedLevelIndex < levelsData.length) handleLevelChange();
    else alert('Congratulations! You Won.👍👍👍👍');
    },[selectedLevelIndex])

    const increaseLevel=()=>{
      const nextLevelIndex = selectedLevelIndex + 1;
      setSelectedLevelIndex(nextLevelIndex);
      setNextLevel(false);
    }

    const handleLevelChange=()=>{
        if (selectedLevelIndex < levelsData.length) {
            handleLevelSelection(levelsData[selectedLevelIndex]);;
          } 
    }

    function handleLevelSelection(level) {
      setSelectedLevel(level);
      setRemainingLives(5);
      setCurrentWord(prevWord => level.name.toUpperCase());
      setGuessedLetters([]);
      setInputFields(Array(level.name.length).fill(null))
    }

    function handleKeyPress(e) {
      const letter = e.key.toUpperCase();
        if (currentWord.includes(letter)) {
          setInputFields(prevState => {
            const updatedFields = prevState.map((field, i) => {
              if (currentWord[i] === letter) return letter;
              return field;
            });
            return updatedFields;
          });        
        } else {
          setRemainingLives((prev)=>prev-1);
        }
      }

  return (
    <div onKeyDown={ handleKeyPress} tabIndex="0" >
    level: {selectedLevel.level}
   <LevelNavigation levelsData={levelsData} selectedLevel={selectedLevel} onSelectLevel={handleLevelSelection} />
   {currentWord && (
        <>
          <h1>Current Word: {selectedLevel.category}</h1>
        </>
      )}
      {
        inputFields.map((item, index)=>{return(
            <p
            key={index}
            className="hangman-input-letter"
            style={styles.hangmanInputLetter}
          >
            {item || "_"}
          </p>
        )})
      }
                <p>Remaining Lives: {remainingLives}</p>
                {nextLevel && <button onClick={()=>increaseLevel()}>Go to next level</button>}

    </div>
  )
}

export default GameBoard