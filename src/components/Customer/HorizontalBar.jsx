import React from 'react'
import '../css/HorizontalBar.css'
import { Link  } from 'react-router-dom'

const HorizontalBar = () => {
  return (
    <div className='horizontal_bar'>
    <div className='all_buttons'>
      <Link to={'/fuelrequest'} type='button' className='bar_button'> Service Form </Link >
      <Link to={'/profile'} type='button' className='bar_button'> Profile </Link >
      <Link to={'/history'} type='button' className='bar_button'> History </Link >
      <Link to={'/feedback'} type='button' className='bar_button'> Feedback </Link >
      <Link to={'/'} type='button' className='bar_button'> Signout </Link >

    </div>
    </div>
  )
}

export default HorizontalBar
