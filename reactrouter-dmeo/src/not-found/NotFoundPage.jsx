import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
   <>
   <h1>This page is not exist</h1>
   <Link to={'/receipeList'}>Go to ReceipeList Page</Link>
   </>
  )
}
