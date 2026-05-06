import React from 'react'

export default function AcceptTask({data}) {
  // console.log(data.title);
  
  return (
    <div>
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
                <div className="flex justify-between items-center">
                <h2 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h2>
                <h3 className='text-sm'>{data.date}</h3>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
                <p className='text-sm mt-3'> {data.description}</p>
                <div className="flex justify-between mt-4">
                    <button className="bg-green-500 py-1 px-2 text-sm">Mark as completed</button>
                    <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
                </div>
        </div>
    </div>
  )
}
