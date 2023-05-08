import React, { useEffect, useState } from 'react';
import { generateWords } from '../Dictionary';
import GameBoard from './GameBoard';
import NewGameScreen from './NewGameScreen';

function Game() {
    const [data, setData] = useState(null);
    const [levelData, setLevelData] = useState(null);
    const [gameMode, setGameMode] = useState('New');

    const startPlaying = () => {
        setGameMode("Playing")
    }

    const startNewGame = () => {
        setGameMode("New Game")
    }


    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        createLevelData(data);
    }, [data]);
    async function fetchData() {
        const res = await generateWords();
        setData(res);
    }
    const createLevelData = (data) => {
        if (data) {
            const randomLevels = [];
            const usedIndexes = [];
            while (randomLevels.length < 10) {
                const randomIndex = Math.floor(Math.random() * data.length);
                if (!usedIndexes.includes(randomIndex)) {
                    randomLevels.push(data[randomIndex]);
                    usedIndexes.push(randomIndex);
                }
            }
            const sortedWords = randomLevels.sort((a, b) => {
                const order = { Easy: 1, Medium: 2, Hard: 3 };
                return order[a.difficulty] - order[b.difficulty];
            });
            let level = sortedWords.map((word, i) => {
                return ({ ...word, level: i + 1 })
            })
            setLevelData(level);
        }
    }
    if (levelData) {
        return (
            <div className="full_height">
                {gameMode == "New" ?
                    <NewGameScreen startPlaying={startPlaying} /> :
                    <GameBoard levelsData={levelData} />
                }
            </div>
        );
    }
}

export default Game;
