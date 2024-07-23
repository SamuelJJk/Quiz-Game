import React from 'react'
import Option from './Options'

function OptionBox({currentQuestion,nextQuest}) {
  const displayOpt =(list)=>{
    return currentQuestion.ansList.map((option,index)=>(
      <Option key={index} option={option} nextQuest={nextQuest}/>
    ))
  }
  return (
    <div className='optionBox'>
        {displayOpt(currentQuestion)}
    </div>
  )
}

export default OptionBox
