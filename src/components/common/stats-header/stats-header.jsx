import React from 'react'

const StatsHeader = ({title, data, growth}) => {
  return (
    <div className='stats_header'>
      <p>{title}</p>
      <h1>{data}</h1>
      <h6>{growth}</h6>
    </div>
  )
}

export default StatsHeader
