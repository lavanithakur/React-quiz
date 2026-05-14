import { useState } from 'react'
import QuizStart from './components/Quesstart'
import Quiz from './components/Quiz'

function App() {
  const [started, setStarted] = useState(false)

  return (
    <>
      {!started ? (
        <QuizStart onStart={() => setStarted(true)} />
      ) : (
        <Quiz />
      )}
    </>
  )
}

export default App
