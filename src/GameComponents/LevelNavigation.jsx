import React,{useState} from 'react';

function LevelNavigation({ levelsData, onSelectLevel, selectedLevel }) {
const [settings, setSettings] = useState(false)
  return (
    <nav>
    <button id="Settings" onClick={()=>setSettings(prev=>!prev)}>Debug</button>
      <ul>
        {settings && levelsData.map(level => (
            <>
             <li key={level.level}>
            <button onClick={() => onSelectLevel(level)} disabled={level.completed}>
            Go to Level{level.level}
            </button>
          </li> 
        </> 
        ))}
      </ul>
      {settings && selectedLevel && (
        <div className="selected-level">
          <div className="selected-level-title">Application current state:</div>
          <div>
            <strong>Level:</strong> {selectedLevel.level}
          </div>
          <div>
            <strong>Category:</strong> {selectedLevel.category}
          </div>
          <div>
            <strong>Difficulty:</strong> {selectedLevel.difficulty}
          </div>
          <div>
            <strong>Name:</strong> {selectedLevel.name}
          </div>
        </div>
      )}

    </nav>
  );
}

export default LevelNavigation;
