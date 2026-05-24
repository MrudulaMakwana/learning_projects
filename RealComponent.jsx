import React from 'react'
import Card from './Card'

const RealComponent = () => {
    const data=[
        {
            id:1,
            title:'Product1'
        },
        {
            id:2,
            title:"Product2",
        },
        {
            id:3,
            title:"Product3"
        },
        {
            id:4,
            title:"Product4"
        },

    ]
  return (
    <>
    <div className='bg-yellow-300 py-20 mx-auto'>
    <button className='bg-orange-300 p-3 m-3 rounded-lg font-bold text-blue-400 hover:bg-amber-800 transition-all cursor-pointer '>Click</button>
    </div>
   <div className='flex justify-center items-center gap-4 '>
    {data.map((item ,inx)=>{
    return <Card key={inx} item={item}/>
   })}
   </div>
    </>
  )
}

export default RealComponent