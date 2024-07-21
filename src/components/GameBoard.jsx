import React from 'react'
import Timer from './Timer'
import QuestionBox from './QuestionBox'
import OptionBox from './OptionBox'

function GameBoard() {
  return (
    <div className='gameBoard'>
      <Timer/>
      <QuestionBox/>
      <OptionBox/>
    </div>
  
  )
}

export default GameBoard
