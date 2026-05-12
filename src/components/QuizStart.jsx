import React from 'react'
import { BookOpen, Clock, Trophy } from 'lucide-react'

function QuizStart({ onStart }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-indigo-100 p-4 rounded-full">
            <BookOpen className="text-indigo-800 w-8 h-8" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-black mb-3">
          React Knowledge Quiz
        </h1>

        {/* Description */}
        <p className="text-gray-800 text-center text-sm mb-6">
          Test your knowledge of React, JavaScript, and web development.
          Answer multiple choice questions and see how well you know the fundamentals!
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-indigo-50 rounded-xl p-4 text-center">
            <BookOpen className="text-indigo-500 w-6 h-6 mx-auto mb-1" />
            <p className="text-indigo-600 font-bold text-lg">8</p>
            <p className="text-gray-600 text-sm font-medium">Questions</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-4 text-center">
            <Clock className="text-purple-500 w-6 h-6 mx-auto mb-1" />
            <p className="text-purple-600 font-bold text-lg">5:00</p>
            <p className="text-gray-600 text-sm font-medium">Minutes</p>
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <Trophy className="text-green-500 w-6 h-6 mx-auto mb-1" />
            <p className="text-green-600 font-bold text-lg">100%</p>
            <p className="text-gray-600 text-sm font-medium">Max Score</p>
          </div>
        </div>

        {/* Rules */}
        <div className="mb-6">
          <h2 className="text-center font-semibold text-gray-700 mb-3">Quiz Rules</h2>
          <div className="bg-gray-50 rounded-xl p-4 space-y-2">
            {[
              'Each question has multiple choice answer',
              'You have 5 minutes to complete the quiz',
              'Each correct answer gives you points',
              'No going back to previous questions',
            ].map((rule, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="bg-indigo-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {index + 1}
                </span>
                <p className="text-gray-600 text-sm">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors duration-200"
        >
          Start Quiz
        </button>

      </div>
    </div>
  )
}

export default QuizStart