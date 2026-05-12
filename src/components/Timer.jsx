import React, { useEffect, useState } from 'react'
import { Clock } from 'lucide-react'

function Timer({ duration = 300, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp && onTimeUp()
      return
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft])

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0')
  const seconds = String(timeLeft % 60).padStart(2, '0')

  return (
    <div className="flex items-center gap-2 text-indigo-600 font-semibold text-lg">
      <Clock className="w-5 h-5" />
      <span>{minutes}:{seconds}</span>
    </div>
  )
}

export default Timer