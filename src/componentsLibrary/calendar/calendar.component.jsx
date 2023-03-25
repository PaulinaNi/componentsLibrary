// to use that component in your react app you need to instal date-fns 
// npm i date-fns

import './calendar.style.css'

import CalendarCell from './calendarComponents/calendarCell.component'

import { startOfMonth, getDaysInMonth } from 'date-fns'
import { useState, useEffect } from 'react'


export default function Calendar() {
 const daysArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
 const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

 const currentDate = new Date()
 const currentMonth = monthsArray[currentDate.getMonth()]
 const currentYear = currentDate.getFullYear()

 const [displayMonth, setDisplayMonth] = useState(new Date().getMonth())
 const [daysInMonth, setDaysInMonth] = useState()
 const [firstDayOfMonth, setFirstDayOfMonth] = useState()

 useEffect(() => {
  const numberOfDaysInMonth = getDaysInMonth(new Date(currentYear, displayMonth))
  const daysInMonthArray = []
  for (let i = 1; i <= numberOfDaysInMonth; i++) {
   daysInMonthArray.push(i)
  }
  setDaysInMonth(daysInMonthArray)

 }, [displayMonth])

 const monthChange = (choice) => {
  choice === 'prev' && setDisplayMonth(prevState => prevState - 1)
  choice === 'next' && setDisplayMonth(prevState => prevState + 1)
 }

 return (
  <section className='calendarContainer'>
   <div className='calendar'>
    <button
     className='calendarItem calendarButton'
     onClick={() => monthChange('prev')}
     disabled={displayMonth === 0}
    >
     {`<`}
    </button>
    <CalendarCell
     classNames='monthNameContainer'
     text={`${monthsArray[displayMonth]} ${currentYear}`}
    />
    <button
     className='calendarItem calendarButton'
     onClick={() => monthChange('next')}
     disabled={displayMonth === 11}
    >
     {`>`}
    </button>
    {/* Days Headers */}
    {daysArray.map((day, index) => <CalendarCell key={index} classNames='calendarItem' text={day} />)}
    {/* Cells for each calendar day in the month */}
    {daysInMonth && daysInMonth.map((day, index) => <CalendarCell key={index} classNames='calendarItem' text={day} />)}
   </div>
  </section>
 )
}