import React from 'react'
import NavBar from './NavBar'
import NavBarM from './NavBarM'
import '../../stylecomponents/Header.css'

const Header = () => {
  return (
    <>
      <div className='desktop'><NavBar /></div>
      <div className='mobile'><NavBarM /></div>
    </>
  )
}

export default Header;