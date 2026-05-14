import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import Timer from './Timer'
import Ques from './Ques'
import { Trophy, RotateCcw } from 'lucide-react'

const TOTAL_QUESTIONS = 8

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [finalScore, setFinalScore] = useState(null)
  const [timeUp, setTimeUp] = useState(false)

  const handleFinish = (score) => {
    setFinalScore(score)
  }

  const handleTimeUp = () => {
    setTimeUp(true)
    setFinalScore(0) // or pass current score if tracked externally
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setFinalScore(null)
    setTimeUp(false)
  }

  // Result screen
  if (finalScore !== null || timeUp) {
    const percentage = Math.round((finalScore / TOTAL_QUESTIONS) * 100)
    return (
      <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4'>
        <div className='bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center'>
          <div className='flex justify-center mb-4'>
            <div className='bg-yellow-100 p-4 rounded-full'>
              <Trophy className='text-yellow-500 w-10 h-10' />
            </div>
          </div>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>
            {timeUp ? 'Time\'s Up!' : 'Quiz Complete!'}
          </h2>
          <p className='text-gray-500 mb-6'>
            {timeUp ? 'You ran out of time.' : 'You\'ve answered all the questions.'}
          </p>
          <div className='bg-indigo-50 rounded-xl p-6 mb-6'>
            <p className='text-5xl font-bold text-indigo-600 mb-1'>{finalScore}<span className='text-2xl text-gray-400'>/{TOTAL_QUESTIONS}</span></p>
            <p className='text-gray-500 text-sm'>{percentage}% correct</p>
          </div>
          <button
            onClick={handleRestart}
            className='flex items-center gap-2 mx-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200'
          >
            <RotateCcw className='w-4 h-4' /> Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4'>
      <div className='max-w-2xl mx-auto'>

        {/* Header */}
        <div className='bg-white rounded-xl shadow-lg p-6 mb-4'>
          <div className='flex justify-between items-center mb-3'>
            <h1 className='text-xl font-bold text-gray-800'>React Knowledge Quiz</h1>
            <Timer duration={300} onTimeUp={handleTimeUp} />
          </div>
          {/* currentQuestion is updated via a callback from Ques */}
          <ProgressBar current={currentQuestion + 1} total={TOTAL_QUESTIONS} />
        </div>

        {/* Question */}
        <Ques
          onFinish={handleFinish}
          onQuestionChange={setCurrentQuestion}
        />

      </div>
    </div>
  )
}

export default Quiz