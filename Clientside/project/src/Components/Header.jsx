import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import logo from "../assets/react.svg"

const Header = () => {
  return (
    <div>
        <header>
            <Link to="/" className='logo'>
            <img src={logo} alt='reactjs' />ReactJs
            </Link>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to = "/books">Books</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>

    </div>
  )
}

export default Header