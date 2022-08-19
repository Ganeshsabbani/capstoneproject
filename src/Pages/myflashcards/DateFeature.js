import React from 'react'


//Getting Current Date
const DateFeature = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


  return (
    <div>
          <h1 className='text-[rgba(135,146,164,255)]'>Created on {date} </h1>
    </div>
  )
}

export default DateFeature