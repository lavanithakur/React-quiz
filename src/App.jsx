import React, { useState } from "react";
import QuizStart from "./components/quizstart";
import Quiz from "./components/quiz";
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