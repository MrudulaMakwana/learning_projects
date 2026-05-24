import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

export default function CreateTask() {
  const { userData, setUserData } = useContext(AuthContext);
  const [task, setTask] = useState({
    taskTitle: '',
    taskDate: '',
    taskAssignTo: '',
    taskCategory: '',
    taskDescription: '',
    active: false,
    newTask: true,
    failed: false,
    completed: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Retrieve employees data from localStorage
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
  
    // Check if the employee exists in the data
    const updatedEmployees = employees.map((employee) => {
      if (employee.firstname === task.taskAssignTo) {
        return {
          ...employee,
          tasks: [...(employee.tasks || []), task], // Add the new task
          taskCounts: {
            ...employee.taskCounts,
            newTask: (employee.taskCounts?.newTask || 0) + 1, // Increment task count
          },
        };
      }
      return employee; // Return unchanged employee if not a match
    });
  
    // Update localStorage with the modified data
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  
    // Log for debugging purposes
    console.log('Task Submitted:', task);
  
    // Reset the task form
    setTask({
      taskTitle: '',
      taskDate: '',
      taskAssignTo: '',
      taskCategory: '',
      taskDescription: '',
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });
  };
  

  return (
    <div>
      <form
        className="mt-5 flex w-full flex-wrap items-start justify-between"
        onSubmit={handleSubmit}
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-lg font-medium text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              name="taskTitle"
              className="text-lg font-medium text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent color-black border-[1px] border-gray-400 mb-4"
              value={task.taskTitle}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              name="taskDate"
              className="text-lg font-medium text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              value={task.taskDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              type="text"
              name="taskAssignTo"
              placeholder="Employee name"
              className="text-lg font-medium text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              value={task.taskAssignTo}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              name="taskCategory"
              placeholder="e.g., dev, design, etc."
              className="text-lg font-medium text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              value={task.taskCategory}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-lg font-medium text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            name="taskDescription"
            cols={30}
            rows={10}
            className="w-full h-44 text-lg font-medium text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            value={task.taskDescription}
            onChange={handleInputChange}
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-800 py-3 hover:bg-emerald-600 px-5 rounded text-lg font-medium text-sm mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}
