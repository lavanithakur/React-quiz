import React from 'react'

function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100

  return (
    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
      <div
        className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export default ProgressBar