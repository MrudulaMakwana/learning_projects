import React from 'react'

const Dashboard = () => {
  return (
    <>
    <div className='my-12 bg-primary min-h-screen '>
        <h1 className='text-white font-bold text-4xl'>Dashboard</h1>
        <div className='py-3 grid grid-cols-2 gap-5 mx-auto w-3/4'>
            <div className='bg-green-800 pt-3 rounded-xl shadow-2xl text-center'>
                <h2 className='text-2xl font-medium '>Users</h2>
                <p>1200</p>
            </div>
            <div className='bg-green-800 pt-3 rounded-xl shadow-2xl text-center'>
                <h2 className='text-2xl font-medium '>Users</h2>
                <p>1200</p>
            </div>
            <div className='bg-green-800 pt-3 rounded-xl shadow-2xl text-center'>
                <h2 className='text-2xl font-medium '>Users</h2>
                <p>1200</p>
            </div>
            <div className='bg-green-800 pt-3 rounded-xl shadow-2xl text-center'>
                <h2 className='text-2xl font-medium '>Users</h2>
                <p>1200</p>
            </div>

        </div>

    </div>
    </>
  )
}

export default Dashboard