import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
    {/* <Link to='#'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/feedback'>Feedback</Link> */}

    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/contact'>Contact</NavLink>
    <NavLink to='/feedback'>Feedback</NavLink>
    </>
  )
}
// <Link to='/about'>About</Link>
// <Routes>
// <Route path='about' element={<About/>}/>
// </Routes>
// <BrowserRouter></browserRouter>