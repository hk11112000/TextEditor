import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'



export default function Navbar(props) {
  const [hamburger, setHamBurger] = useState(false);
  const hamB = () => {
    setHamBurger(!hamburger)
  }





  return (
    <>
    <div className="container">
      <div className="logo"><i className="bi bi-code"></i> HIMANSHU <i className="bi bi-code-slash"></i>
      </div>
      <nav className='Navbar'>
        <ul className={hamburger ? 'hamburger-menu': ''}>
          <li><i className="bi bi-house-door-fill"></i> <a href="/">{props.menu1}</a><p></p></li>
          <li onClick={props.scrollbar}><i className="bi bi-file-person"></i> <a href="#/">{props.menu2}</a><p></p></li>
          <li onClick={props.skillDisplay}><i className="bi bi-pc-display"></i> <a href='#/'>{props.menu3}</a><p></p></li>
        </ul>
        <i onClick={hamB} className={hamburger ? 'bi bi-x-circle' : 'bi bi-list'}></i>
        <button><a href="https://www.himanshu-karpe.in" target='_blank' rel="noopener">Portfolio.</a></button>
      </nav>
    </div>
    </>
  )
}
Navbar.propTypes={
    title : PropTypes.string.isRequired,
    menu1 : PropTypes.string.isRequired,
    menu2 : PropTypes.string.isRequired,
    menu3 : PropTypes.string.isRequired
}
Navbar.defaultProps={
    title: 'Title Name',
    menu1: 'Menu',
    menu2: 'Menu',
    menu3: 'Menu'
}
