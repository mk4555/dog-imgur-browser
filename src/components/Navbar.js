import React from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import '../styles/App.css'

const Navbar = () =>
  <div>
    <NavLink className="navbar" to="/">Home</NavLink>
    <NavLink className="navbar" to='/random'>Random</NavLink>
    <NavLink className="navbar" to='/favorites'>Favorites</NavLink>
  </div>

export default Navbar
