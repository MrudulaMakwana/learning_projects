import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

export default function TaskList({data}) {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-10 py-5 w-full '>
       
        {data.tasks.map((ele,inx)=>{
                console.log(ele);
                if(ele.active)
                {
                        return <AcceptTask key={inx} data={ele}/>
                }
                if(ele.completed)
                {
                        return <CompleteTask  key={inx} data={ele}/>
                }
                if(ele.newTask)
                {
                        return <NewTask  key={inx} data={ele}/>
                }
                if(ele.failed)
                {
                        return <FailedTask  key={inx} data={ele}/>
                }
                
        })}
       
    </div>
  )
}
