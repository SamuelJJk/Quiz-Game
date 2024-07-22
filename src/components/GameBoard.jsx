import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import QuestionBox from './QuestionBox';
import OptionBox from './OptionBox';

function GameBoard({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const initialLoad = () => {
    if (questions && questions.length > 0) {
      setCurrentQuestion(questions[0]);
    }
  };

  useEffect(() => {
    initialLoad();
  }, [questions]);

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className='gameBoard'>
      <Timer />
      <QuestionBox currentQuestion={currentQuestion} />
      <OptionBox />
    </div>
  );
}

export default GameBoard;
