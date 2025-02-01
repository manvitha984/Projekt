import { useState, useEffect } from "react";

const tasks = [
  {
    id: "#T123",
    title: "Make an automatic payment system that enables the design",
    openedBy: "Yash Gori",
    daysAgo: 10,
    priority: "High",
    progress: 75,
    timeLeft: "2d 5h",
  },
  {
    id: "#T124",
    title: "Implement user authentication with OAuth",
    openedBy: "Yash Gori",
    daysAgo: 5,
    priority: "Medium",
    progress: 40,
    timeLeft: "4d 12h",
  },
  {
    id: "#T125",
    title: "Improve database query efficiency for large datasets",
    openedBy: "Yash Gori",
    daysAgo: 3,
    priority: "Low",
    progress: 20,
    timeLeft: "6d 8h",
  },
];

const priorityColors = {
  High: "bg-red-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
};

export default function taskPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F8] p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Tasks</h1>
      <div className="space-y-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center bg-white p-6 rounded-lg shadow-md relative"
          >
            {/* Progress Meter */}
            <div className="w-4 h-full bg-gray-200 rounded-lg overflow-hidden mr-4">
              <div
                className="h-full transition-all duration-500
                style={{ height: `${task.progress}%` }}
                className={priorityColors[task.priority]}"
              ></div>
            </div>

            {/* Task Info */}
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">{task.title}</h2>
              <p className="text-gray-600 text-sm">
                {task.id} - Opened {task.daysAgo} days ago by {task.openedBy}
              </p>
            </div>

            {/* Priority Label */}
            <span
              className={`text-white text-sm font-medium px-3 py-1 rounded-full ${priorityColors[task.priority]}`}
            >
              {task.priority}
            </span>

            {/* Timer */}
            <div className="ml-6 text-gray-700 font-semibold text-lg">
              ⏳ {task.timeLeft}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}