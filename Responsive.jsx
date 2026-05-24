import React from 'react'

const Responsive = () => {
  return (
    <>
    <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='bg-gray-500'>1</div>
        <div className='bg-gray-500'>2</div>
        <div className='bg-gray-500'>3</div>
        <div className='bg-gray-400'> 4</div>
        <div className='bg-gray-300'>5</div>
    </div>
    <div className="max-w-7xl mx-auto">
  <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    <div className='bg-gray-500 p-5'>1</div>
    <div className='bg-gray-500 p-5'>2</div>
    <div className='bg-gray-500 p-5'>3</div>
    <div className='bg-gray-400 p-5'>4</div>
    <div className='bg-gray-300 p-5'>5</div>
  </div>
</div>


<div className="p-6 bg-gray-100">

      <h1 className="text-2xl md:text-3xl mb-6">
        Responsive Products
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          Product 1
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          Product 2
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          Product 3
        </div>

      </div>

    </div>
    </>
  )
}

export default Responsive