import React from "react";
import "./QQ.css";

const QuizQuestion = ({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  onNext,
  onPrevious,
  timeLeft,
}) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((questionIndex + 1) / totalQuestions) * 100;
  const isAnswered = selectedAnswer !== null && selectedAnswer !== undefined;
  const isLastQuestion = questionIndex === totalQuestions - 1;

  const getOptionClass = (index) => {
    if (!isAnswered) return "option";
    if (index === question.correct) return "option option-correct";
    if (index === selectedAnswer && selectedAnswer !== question.correct)
      return "option option-wrong";
    return "option option-dim";
  };

  const isTimeLow = timeLeft <= 60;

  return (
    <div className="quiz-question-wrapper">
      {/* Progress Bar Header */}
      <div className="progress-header">
        <span className="question-count">
          Question {questionIndex + 1} of {totalQuestions}
        </span>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="progress-percent">{Math.round(progress)}%</span>
        <div className={`timer ${isTimeLow ? "timer-low" : ""}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Question Card */}
      <div className="question-card">
        <h2 className="question-text">{question.question}</h2>

        <div className="options-list">
          {question.options.map((opt, i) => (
            <button
              key={i}
              className={getOptionClass(i)}
              onClick={() => !isAnswered && onAnswer(i)}
              disabled={isAnswered}
            >
              <span className="option-text">{opt}</span>
              {isAnswered && i === question.correct && (
                <svg className="icon-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              )}
              {isAnswered &&
                i === selectedAnswer &&
                selectedAnswer !== question.correct && (
                  <svg className="icon-x" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                )}
            </button>
          ))}
        </div>

        {/* Explanation */}
        {isAnswered && (
          <div className="explanation">
            <div className="explanation-header">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5b6af0" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <strong>Explanation:</strong>
            </div>
            <p>{question.explanation}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="nav-buttons">
          <button
            className="nav-btn prev-btn"
            onClick={onPrevious}
            disabled={questionIndex === 0}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Previous
          </button>

          {isAnswered && (
            <button className="nav-btn next-btn" onClick={onNext}>
              {isLastQuestion ? "Finish Quiz" : "Next Quiz"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
