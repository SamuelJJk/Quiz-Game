import React from 'react'

function QuestionBox({currentQuestion}) {
  return (
    <div className='questionBox'>
      {currentQuestion.question}
    </div>
  )
}

export default QuestionBox
