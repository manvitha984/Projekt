import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

const AdminTaskPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Task 1', progress: 40, assignedTo: 'John Doe', subtasks: ['Subtask 1.1', 'Subtask 1.2'] },
    { id: 2, task: 'Task 2', progress: 75, assignedTo: 'Jane Smith', subtasks: ['Subtask 2.1', 'Subtask 2.2'] }
  ]);

  const [newTask, setNewTask] = useState('');
  const [newSubtask, setNewSubtask] = useState('');
  const [newAssigned, setNewAssigned] = useState('');

  const handleAddTask = () => {
    const newTaskObj = {
      id: tasks.length + 1,
      task: newTask,
      progress: 0,
      assignedTo: newAssigned,
      subtasks: [newSubtask]
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
    setNewSubtask('');
    setNewAssigned('');
  };

  return (
    <div className="min-h-screen bg-[#FFF8F8] flex">
      <div className="flex-1 p-8">
        <h1 className="text-center text-3xl font-semibold mb-6 text-dark-gray">Admin Task Management</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-medium mb-4 text-dark-gray">Create New Task</h2>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="task" className="text-sm font-medium text-dark-gray">Task Name</label>
              <input
                type="text"
                id="task"
                className="border-2 border-gray-300 p-2 rounded-md"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subtask" className="text-sm font-medium text-dark-gray">Subtask</label>
              <input
                type="text"
                id="subtask"
                className="border-2 border-gray-300 p-2 rounded-md"
                value={newSubtask}
                onChange={(e) => setNewSubtask(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="assignedTo" className="text-sm font-medium text-dark-gray">Assigned To</label>
              <input
                type="text"
                id="assignedTo"
                className="border-2 border-gray-300 p-2 rounded-md"
                value={newAssigned}
                onChange={(e) => setNewAssigned(e.target.value)}
              />
            </div>
            <button
              onClick={handleAddTask}
              className="bg-[#FE6059] text-white py-2 px-4 rounded-md mt-4 hover:bg-[#FE3F3A] transition-all"
            >
              Add Task
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-dark-gray">{task.task}</h2>
              <p className="text-sm text-gray-500">Assigned to: {task.assignedTo}</p>
              <div className="mt-4">
                <h3 className="text-md font-medium text-dark-gray">Subtasks</h3>
                <ul className="list-disc pl-5">
                  {task.subtasks.map((subtask, idx) => (
                    <li key={idx} className="text-sm text-gray-600">{subtask}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-md font-medium text-dark-gray">Progress</h3>
                <div className="w-full bg-light-blue h-4 rounded-full mt-2">
                  <div className="bg-[#FE6059] h-full rounded-full" style={{ width: `${task.progress}%` }}></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">{task.progress}% completed</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminTaskPage;
