import React from 'react'
import { BookOpen, Clock, Trophy, Play } from 'lucide-react'

function QuessStart({ onStart }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-md p-8 max-w-lg w-full">

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="bg-indigo-100 p-4 rounded-full">
            <BookOpen className="text-indigo-500 w-8 h-8" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-3">
          React Knowledge Quiz
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-center text-sm mb-6 leading-relaxed">
          Test your knowledge of React, JavaScript, and web development.
          Answer multiple choice questions and see how well you know the fundamentals!
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-indigo-50 rounded-2xl p-4 text-center">
            <BookOpen className="text-indigo-400 w-6 h-6 mx-auto mb-2" />
            <p className="text-indigo-600 font-bold text-2xl">8</p>
            <p className="text-gray-500 text-xs font-semibold mt-1">Questions</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-4 text-center">
            <Clock className="text-purple-400 w-6 h-6 mx-auto mb-2" />
            <p className="text-purple-600 font-bold text-2xl">5:00</p>
            <p className="text-gray-500 text-xs font-semibold mt-1">Minutes</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 text-center">
            <Trophy className="text-green-400 w-6 h-6 mx-auto mb-2" />
            <p className="text-green-600 font-bold text-2xl">100%</p>
            <p className="text-gray-500 text-xs font-semibold mt-1">Max Score</p>
          </div>
        </div>

        {/* Rules */}
        <div className="mb-8">
          <h2 className="text-center font-semibold text-gray-700 mb-4">Quiz Rules</h2>
          <div className="space-y-3">
            {[
              'Each question has multiple choice answers',
              'You have 5 minutes to complete all questins',
              "Once you select an answer, you'll see the explaination",
              'You can navigate back to previous questions',
            ].map((rule, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="bg-indigo-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <p className="text-gray-500 text-sm">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
        >
          <Play className="w-4 h-4 fill-white" />
          Start Quiz
        </button>

      </div>
    </div>
  )
}

export default QuessStart