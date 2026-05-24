import React from 'react'

const FlexBox = () => {
  return (
    <>
    <div className='flex gap-2 border border-amber-950 m-2 '>
        <div className="bg-green-400 p-3"> Box 1</div>
        <div className="bg-emerald-300 p-4 "> Box 2</div>
        
    </div>
    <h3>Flex direction column</h3>
    <div className="flex flex-col justify-center items-center">
        <div className="bg-blue-400 w-[250px] p-3"> Box 1
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eius. Ipsam illum maiores a numquam, hic, culpa ducimus laboriosam delectus quaerat, odio aut.</p>
          <h2>hello</h2>
        </div>
        <div className="bg-purple-500 w-[250px] p-4 "> Box 2</div>
    </div>
<br />
<div className='w-full h-[15px] bg-gray-100 pt-12 mt-5'>
  <nav className='bg-gray-800'>
    <ul className='flex  gap-3'>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
      <li>Home</li>
    </ul>
  </nav>

</div>

    </>
  )
}

export default FlexBox