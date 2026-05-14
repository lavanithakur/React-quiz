import React from 'react'
import { Trophy, Target, Award, Clock, RotateCcw } from 'lucide-react'

function Result({ score, total, timeTaken, onRestart }) {
  const percentage = Math.round((score / total) * 100)

  const getPerformanceMessage = () => {
    if (percentage === 100) return 'Perfect Score! Outstanding! 🎉'
    if (percentage >= 80) return 'Great Job! Well Done! 👏'
    if (percentage >= 60) return 'Good Effort! Keep Practicing! 💪'
    if (percentage >= 40) return 'Not Bad! Try Again! 📚'
    return 'Keep Practicing! You can do it! 🔥'
  }

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0')
    const s = String(seconds % 60).padStart(2, '0')
    return `${m}:${s}`
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">

        {/* Trophy Icon */}
        <div className="flex justify-center mb-4">
          <Trophy className="w-12 h-12 text-gray-800" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Quiz Completed!</h1>
        <p className="text-gray-500 mb-6">{getPerformanceMessage()}</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">

          {/* Score */}
          <div className="bg-indigo-50 rounded-xl p-4 text-center">
            <Target className="text-indigo-400 w-6 h-6 mx-auto mb-2" />
            <p className="text-indigo-700 font-bold text-lg">{score} / {total}</p>
            <p className="text-gray-500 text-xs font-medium">Question Correct</p>
          </div>

          {/* Percentage */}
          <div className="bg-purple-50 rounded-xl p-4 text-center">
            <Award className="text-purple-400 w-6 h-6 mx-auto mb-2" />
            <p className="text-purple-700 font-bold text-lg">{percentage}%</p>
            <p className="text-gray-500 text-xs font-medium">Score Percentage</p>
          </div>

          {/* Timer */}
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <Clock className="text-green-400 w-6 h-6 mx-auto mb-2" />
            <p className="text-green-700 font-bold text-lg">{formatTime(timeTaken)}</p>
            <p className="text-gray-500 text-xs font-medium">Time Used</p>
          </div>

        </div>

        {/* Question Review */}
        <p className="text-gray-600 font-semibold mb-4">Question Review</p>

        {/* Restart Button */}
        <button
          onClick={onRestart}
          className="flex items-center gap-2 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200"
        >
          <RotateCcw className="w-4 h-4" />
          Take Quiz Again
        </button>

      </div>
    </div>
  )
}

export default Result