import React from 'react'

function Options({option,nextQuest}) {
  return (
    <div className='options' onClick={()=>{
      console.log(option);
      nextQuest();
    }}>
      {option}
    </div>
  )
}

export default Options
