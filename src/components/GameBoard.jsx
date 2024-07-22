import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import QuestionBox from './QuestionBox';
import OptionBox from './OptionBox';
import Options from './Options';

function GameBoard({ questions }) {
  const [questNum,setQuestNum] =useState(0)
  const nextQuest = ()=>{
    if(questNum < (questions.length)){
      setQuestNum((prevState)=>prevState + 1);
    }
  }
  // ^ changes the question number
  
  const [currentQuestion, setCurrentQuestion] = useState(null);
  //This state hold the current question that will be displayed
  
  const initialLoad = () => {
    if (questions && questions.length > 0) {
      setCurrentQuestion(questions[questNum]);
    }
  };
  useEffect(() => {
    initialLoad();
  }, [questNum,questions]);
  if (!currentQuestion) {
    return <div></div>;
  }
  return (
    <div className='gameBoard'>
      <Timer />
      <QuestionBox currentQuestion={currentQuestion} />
      <OptionBox currentQuestion={currentQuestion} nextQuest={nextQuest}/>
    </div>
  );
}

export default GameBoard;
