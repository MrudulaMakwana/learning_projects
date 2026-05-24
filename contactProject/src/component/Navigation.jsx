import React from 'react'
import styled from './Navigation.module.css'

export default function Navigation() {
  return (
    <>
    <nav className={styled.container}>
        <div className={styled.logo}>
            <img src="/public/img/logo.png" alt="Logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    </>
  )
}
