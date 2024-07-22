import { useEffect, useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import { simQ } from './questions/question';

function App() {
  const [gameQuestions,setGameQuestions] = useState({})
  //state above will hold the sample question to be passed down
  useEffect(()=>{
    setGameQuestions(simQ)
  },[])  
  return (
    <div className="App">
      <GameBoard questions={gameQuestions}/>
    </div>
  );
}

export default App;
