import React from 'react'

const StatsTitle = ({title, date}) => {
  return (
    <div className='stats_title'>
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
  )
}

export default StatsTitle;
