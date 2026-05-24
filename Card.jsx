import React from 'react'

const Card = ({item}) => {
  return (
    <>
    <div className='bg-green-300 my-5 mx-2 rounded-3xl w-[400px] shadow-lg'>
        <h1>{item.title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed aliquam repellendus voluptatibus qui ratione deserunt rem, quia consequuntur esse perspiciatis, aliquid tenetur.</p>
        <button className='bg-red-400 rounded-2xl text-white font-semibold p-3 m-2 cursor-pointer hover:bg-amber-400 transition-all'>Add to cart</button>
    </div>
    </>
  )
}

export default Card