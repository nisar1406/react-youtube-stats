import moment from 'moment';
import React from 'react'

const StatsTitle = ({title, date, showDatesDropdown}) => {
  const statusDate = showDatesDropdown? `${moment(date?.startDate).format('MMMM D')} - ${moment(date?.endDate).format('D, YYYY')}` : `${moment(date?.endDate).format('MMMM D')} - ${moment(date?.startDate).format('D, YYYY')}`;
  return (
    <div className='stats_title'>
        <h1>{title}</h1>
        <p>{statusDate}</p>
      </div>
  )
}

export default StatsTitle;
