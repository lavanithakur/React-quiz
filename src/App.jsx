import React, { useState } from "react";
import QuizStart from "./components/quizstart";
import Quiz from "./components/Quiz"; 
import Result from "./components/Result";

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

{screen === 'result' && (
  <Result
    score={finalScore}
    total={2}         // ✅ change this to match number of questions
    timeTaken={timeTaken}
    onRestart={() => setScreen('start')}
  />
)}

export default App