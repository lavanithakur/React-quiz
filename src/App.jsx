import React, { useState, useEffect, useRef } from "react";
import StartScreen from "./components/StartScreen";
import QuizQuestion from "./components/QuizQuestion";
import ResultScreen from "./components/Result";
import { questions } from "./question";
import "./App.css";

const TOTAL_TIME = 300; // 5 minutes in seconds

function App() {
  const [screen, setScreen] = useState("start"); // "start" | "quiz" | "result"
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(question.length).fill(undefined));
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [timeUsed, setTimeUsed] = useState(0);
  const timerRef = useRef(null);

  // Start timer when quiz begins
  useEffect(() => {
    if (screen === "quiz") {
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            finishQuiz();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [screen]);

  const finishQuiz = () => {
    clearInterval(timerRef.current);
    setTimeUsed(TOTAL_TIME - timeLeft);
    setScreen("result");
  };

  const handleStart = () => {
    setAnswers(Array(question.length).fill(undefined));
    setCurrentIndex(0);
    setTimeLeft(TOTAL_TIME);
    setScreen("quiz");
  };

  const handleAnswer = (optionIndex) => {
    const updated = [...answers];
    updated[currentIndex] = optionIndex;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (currentIndex === question.length - 1) {
      setTimeUsed(TOTAL_TIME - timeLeft);
      clearInterval(timerRef.current);
      setScreen("result");
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const handleRestart = () => {
    clearInterval(timerRef.current);
    setAnswers(Array(question.length).fill(undefined));
    setCurrentIndex(0);
    setTimeLeft(TOTAL_TIME);
    setTimeUsed(0);
    setScreen("start");
  };

  return (
    <div className="app-bg">
      <div className="app-card">
        {screen === "start" && (
          <StartScreen
            totalQuestions={question.length}
            onStart={handleStart}
          />
        )}
        {screen === "quiz" && (
          <QuizQuestion
            question={question[currentIndex]}
            questionIndex={currentIndex}
            totalQuestions={question.length}
            selectedAnswer={answers[currentIndex]}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onPrevious={handlePrevious}
            timeLeft={timeLeft}
          />
        )}
        {screen === "result" && (
          <ResultScreen
            answers={answers}
            questions={question}
            timeUsed={timeUsed}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}

export default App;
