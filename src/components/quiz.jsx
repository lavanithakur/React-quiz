import React from 'react'
import ProgressBar from './ProgressBar'
import Timer from './Timer'
import Ques from './Ques'

function Quiz() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4'>
      <div className='max-w-2xl mx-auto'>

        {/* Header */}
        <div className='bg-white rounded-xl shadow-lg p-6 mb-4'>
          <div className='flex justify-between items-center mb-3'>
            <h1 className='text-xl font-bold text-gray-800'>React Knowledge Quiz</h1>
            <Timer duration={300} />
          </div>
          <ProgressBar current={1} total={8} />
        </div>

        {/* Question */}
        <Ques />

      </div>
    </div>
  )
}

export default Quiz