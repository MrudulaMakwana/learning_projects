import React from 'react'
import styled from '../components/ProductItem.module.css'

export function ButtonComponent()
{
    return(
        <>
        <button>Click</button>
        </>
    )
}

export default function productItem({product}) {
  const flag=true;
  return (
    <>
      {flag ? <h1 style={{padding:"10px"}}>Condition is true</h1>: <h1>Condition is false</h1> }
    <p className={styled.title}>{product}</p>
    <ButtonComponent/>
    </>
  )
}
