import React, {useContext,useState, useEffect} from 'react'
import Nav from './Nav'
import PlayLevel from './PlayLevel'
import { GameContext } from '../GameContext'
import { generateWords } from '../Dictionary'


function GameFrame() {
  const {gameStarted, setData, setGameData, level,setLevel} = useContext(GameContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
    async function getData() {
      const res = await generateWords();
      setData(res);
      initDataForGame(res)
    }
  }, [gameStarted]);


  const initDataForGame = (data)=>{
    const shuffledArr = shuffle(data);
    const randomTen = shuffledArr.slice(0, 10);
    const sortedArr = randomTen.sort((a, b) => {
      const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
      return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    });
    setGameData(sortedArr)
    let ans = sortedArr[level.id]
    setLevel({id:1,ans:ans})
    setLoading(false);
  }
  
 

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  return (
    <div>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
       <PlayLevel/>
        </>
      )}
    </div>
  )
}

export default GameFrame