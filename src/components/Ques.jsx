import React, { useState } from 'react'
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react'

const questions = [
  {
    id: 1,
    question: "What is React?",
    options: ["A CSS framework", "A JavaScript library", "A database", "A backend framework"],
    correct: 1,
    explanation: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    question: "What hook is used for state in React?",
    options: ["useEffect", "useRef", "useState", "useContext"],
    correct: 2,
    explanation: "useState is the hook used to manage state in functional components."
  },
]

function Ques({ onFinish }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)

  const question = questions[current]

  const handleSelect = (index) => {
    if (selected !== null) return
    setSelected(index)
    setShowExplanation(true)
    if (index === question.correct) {
      setScore(prev => prev + 1)
    }
  }

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(prev => prev + 1)
      setSelected(null)
      setShowExplanation(false)
    } else {
      onFinish && onFinish(score)
    }
  }

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(prev => prev - 1)
      setSelected(null)
      setShowExplanation(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">

      {/* Question Header */}
      <p className="text-sm text-gray-400 mb-2">Question {current + 1} of {questions.length}</p>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">{question.question}</h2>

      {/* Options */}
      <div className="space-y-3 mb-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`w-full text-left px-4 py-3 rounded-lg border transition-all duration-200
              ${selected === null ? 'hover:bg-indigo-50 border-gray-200' : ''}
              ${selected === index && index === question.correct ? 'bg-green-100 border-green-400 text-green-700' : ''}
              ${selected === index && index !== question.correct ? 'bg-red-100 border-red-400 text-red-700' : ''}
              ${selected !== null && index === question.correct && selected !== index ? 'bg-green-100 border-green-400' : ''}
            `}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="flex items-start gap-3 bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 mb-4">
          <CheckCircle2 className="text-blue-500 w-5 h-5 mt-0.5 shrink-0" />
          <div>
            <p className="text-blue-700 font-semibold text-sm">Explanation:</p>
            <p className="text-blue-600 text-sm">{question.explanation}</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handlePrev}
          disabled={current === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-40 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Previous
        </button>
        <button
          onClick={handleNext}
          disabled={selected === null}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 transition"
        >
          Next <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  )
}

export default Ques