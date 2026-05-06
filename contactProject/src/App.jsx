import { useState } from 'react'

import Navigation from './component/Navigation'
import ContactHeader from './component/ContactHeader'
import ContactForm from './component/ContactForm'

function App() {

  return (
    <>
      <Navigation/>
      <main className='main_container'>
      <ContactHeader/>
      <ContactForm/>
      </main>
    </>
  )
}

export default App
