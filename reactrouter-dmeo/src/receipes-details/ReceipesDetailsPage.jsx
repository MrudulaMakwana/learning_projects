import React from 'react'
import { useParams } from 'react-router-dom'

export default function ReceipesDetailsPage() {
    let params=useParams()
    console.log(params);
    const {id}=params    
    console.log("id ",id);
    
  return (
    <div>ReceipesDetailsPage {id}</div>
  )
}
