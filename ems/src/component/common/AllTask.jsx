// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../context/AuthProvider";

// export default function AllTask() {
//   const [userData, setUserData] = useContext(AuthContext);
//   // console.log(authData.employees);
//   const [taskNew, setTaskNew] = useState(null);
//   const [taskComplete, setTaskCompete] = useState(null);
//   const [taskfailed, setTaskfailed] = useState(null);
//   const [taskActive, setTaskActive] = useState(null);
//   useEffect(() => {
//     userData.employees.map((ele, inx) => {
//       setTaskNew(ele.taskCounts.newTask);
//       setTaskActive(ele.taskCounts.active);
//       setTaskfailed(ele.taskCounts.failed);
//       setTaskCompete(ele.taskCounts.completed);
//     });

//   }, [])
  

//   return (
//     <>
//       <div className="bg-[#1C1C1C] p-5 rounded mt-5  h-60 ">
//         <div className="bg-emerald-800 mb-2 py-2 px-4 flex justify-between rounded ">
//           <h2 className="text-lg font-medium w-1/5 text-white-800">
//             Employee Name
//           </h2>
//           <h3 className="text-lg font-medium w-1/5 text-white-800">New Task</h3>
//           <h5 className="text-lg font-medium w-1/5 text-white-800 ">
//             Active Task
//           </h5>
//           <h5 className="text-lg font-medium w-1/5  text-white-800">
//             Completed Task
//           </h5>
//           <h5 className="text-lg font-medium w-1/5 text-white-800 ">
//             Failed Task
//           </h5>
//         </div>
//         <div className="overflow-auto">
//           {userData.employees.map((ele, inx) => {
//             return (
//               <div
//                 key={inx}
//                 className="bg-emerald-800  mb-2 py-2 px-4 flex justify-between rounded "
//               >
//                 <h2 className="text-lg font-medium w-1/5 text-white-800">
//                   {ele.firstname}
//                 </h2>
//                 <h3 className="text-lg font-medium w-1/5 text-blue-400">
//                  {taskNew}
//                 </h3>
//                 <h5 className="text-lg font-medium w-1/5 text-yellow-400">
//                  {taskActive}
//                 </h5>
//                 <h5 className="text-lg font-medium w-1/5 text-white-800">
//                 {taskComplete}
//                 </h5>
//                 <h5 className="text-lg font-medium w-1/5 text-red-400">
//                   {taskfailed}
//                 </h5>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function AllTask() {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-[#1C1C1C] p-5 rounded mt-5">
      <div className="bg-emerald-800 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5 text-white-800">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 text-white-800">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 text-white-800">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 text-white-800">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5 text-white-800">Failed Task</h5>
      </div>

      <div className="overflow-auto">
        {userData.employees?.map((emp, index) => (
          <div key={index} className="bg-emerald-800 mb-2 py-2 px-4 flex justify-between rounded">
            <h2 className="text-lg font-medium w-1/5 text-white-800">{emp.firstname}</h2>
            <h3 className="text-lg font-medium w-1/5 text-blue-400">{emp.taskCounts?.newTask || 0}</h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-400">{emp.taskCounts?.active || 0}</h5>
            <h5 className="text-lg font-medium w-1/5 text-white-800">{emp.taskCounts?.completed || 0}</h5>
            <h5 className="text-lg font-medium w-1/5 text-red-400">{emp.taskCounts?.failed || 0}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
