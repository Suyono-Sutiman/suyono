import React from "react"
import { Image } from "react-bootstrap"
import logo from '../images/yonowhite.png'

const Header = ( ) => (
  <header className='head'>
    <Image src={logo} fluid/>
  </header>
)

export default Header
