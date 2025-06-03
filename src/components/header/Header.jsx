import React from 'react'
import Meetuplogo from '../../assets/images/Meetup-logo.png'

const Header = () => {
  return (
    <div>
      <img className='h-40 w-40 object-contain' src={Meetuplogo} alt="logo" />
    </div>
  )
}

export default Header
