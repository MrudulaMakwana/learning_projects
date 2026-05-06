import React from 'react'
import Header from '../common/Header'
import TaskNumber from '../common/TaskNumber'
import TaskList from '../TaskList/TaskList'

export default function EmployeeDashboard(props) {
  return (
    <>
   <div className="p-10 bg-[#1C1C1C] h-screen">
   <Header data={props.data} changeUser={props.changeUser}/>
   <TaskNumber data={props.data}/>
   <TaskList data={props.data}/>
   </div>
    </>
  )
}
