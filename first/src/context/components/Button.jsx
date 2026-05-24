import React, { useContext } from 'react'
import { GlobalContext } from '../DemoContext'

export default function Button() {
    const {theme,setTheme}=useContext(GlobalContext);

  return (
    <>
    <button onClick={()=>setTheme(theme==='light' ? 'dark':'light')}>Change Theme</button>
    </>
  )
}
