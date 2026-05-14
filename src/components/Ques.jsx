import React, { useState } from 'react'
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react'

const questions = [
  {
    id: 1,
    question: "What is React?",
    options: ["A CSS framework", "A JavaScript library", "A database", "A backend framework"],
    correct: 1,
    explanation: "React is a JavaScript library for building user interfaces, developed by Meta."
  },
  {
    id: 2,
    question: "What hook is used for state in React?",
    options: ["useEffect", "useRef", "useState", "useContext"],
    correct: 2,
    explanation: "useState is the hook used to manage state in functional components."
  },
  {
    id: 3,
    question: "What does JSX stand for?",
    options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extra"],
    correct: 0,
    explanation: "JSX stands for JavaScript XML. It allows writing HTML-like syntax inside JavaScript."
  },
  {
    id: 4,
    question: "Which hook is used for side effects in React?",
    options: ["useState", "useCallback", "useEffect", "useMemo"],
    correct: 2,
    explanation: "useEffect is used for side effects like data fetching, subscriptions, or manually changing the DOM."
  },
  {
    id: 5,
    question: "How do you pass data from parent to child in React?",
    options: ["State", "Props", "Context", "Redux"],
    correct: 1,
    explanation: "Props (short for properties) are used to pass data from a parent component to a child component."
  },
  {
    id: 6,
    question: "What is the virtual DOM?",
    options: [
      "A direct copy of the real DOM",
      "A lightweight in-memory representation of the real DOM",
      "A browser API",
      "A CSS rendering engine"
    ],
    correct: 1,
    explanation: "The virtual DOM is a lightweight in-memory representation of the real DOM that React uses to optimize updates."
  },
  {
    id: 7,
    question: "What does the key prop help React with?",
    options: [
      "Styling list items",
      "Identifying which items in a list have changed",
      "Passing data to child components",
      "Handling events"
    ],
    correct: 1,
    explanation: "The key prop helps React identify which items in a list have changed, been added, or removed, improving reconciliation performance."
  },
  {
    id: 8,
    question: "Which method is used to update state in a class component?",
    options: ["this.state()", "this.updateState()", "this.setState()", "this.changeState()"],
    correct: 2,
    explanation: "this.setState() is the method used to update state in React class components."
  },
]

function Ques({ onFinish, onQuestionChange }) {
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
    const isCorrect = selected === question.correct
    // Calculate the new score synchronously to avoid stale closure
    const newScore = isCorrect ? score + 1 : score

    if (current + 1 < questions.length) {
      const nextIndex = current + 1
      setCurrent(nextIndex)
      setSelected(null)
      setShowExplanation(false)
      onQuestionChange && onQuestionChange(nextIndex)
    } else {
      // Pass newScore directly to avoid stale state bug
      onFinish && onFinish(newScore)
    }
  }

  const handlePrev = () => {
    if (current > 0) {
      const prevIndex = current - 1
      setCurrent(prevIndex)
      setSelected(null)
      setShowExplanation(false)
      onQuestionChange && onQuestionChange(prevIndex)
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
          {current + 1 === questions.length ? 'Finish' : 'Next'} <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  )
}

export default Ques