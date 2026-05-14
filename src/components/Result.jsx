import React, { useState } from "react";
import "./R.css";

const ResultScreen = ({ answers, questions, timeUsed, onRestart }) => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const correctCount = answers.filter(
    (ans, i) => ans === questions[i].correct
  ).length;
  const scorePercent = Math.round((correctCount / questions.length) * 100);

  const timeUsedMin = Math.floor(timeUsed / 60);
  const timeUsedSec = timeUsed % 60;

  const getPerformanceMessage = () => {
    if (scorePercent === 100) return "Perfect Score! 🎉";
    if (scorePercent >= 80) return "Excellent Work! 🌟";
    if (scorePercent >= 60) return "Good Job! 👍";
    if (scorePercent >= 40) return "Keep Practicing! 💪";
    return "Don't Give Up! 📚";
  };

  return (
    <div className="result-screen">
      <div className="result-icon">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="2">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      </div>

      <h1 className="result-title">Quiz Completed!</h1>
      <p className="result-subtitle">{getPerformanceMessage()}</p>

      <div className="result-stats">
        <div className="result-stat stat-blue">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="result-stat-value">{correctCount} / {questions.length}</span>
          <span className="result-stat-label">Questions Correct</span>
        </div>
        <div className="result-stat stat-purple">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#9b59b6" strokeWidth="2">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
          </svg>
          <span className="result-stat-value result-purple">{scorePercent}%</span>
          <span className="result-stat-label">Score Percentage</span>
        </div>
        <div className="result-stat stat-green">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="result-stat-value result-green">
            {timeUsedMin}:{String(timeUsedSec).padStart(2, "0")}
          </span>
          <span className="result-stat-label">Time Used</span>
        </div>
      </div>

      {/* Question Review */}
      <div className="review-section">
        <h3 className="review-title">Question Review</h3>
        <div className="review-list">
          {questions.map((q, i) => {
            const isCorrect = answers[i] === q.correct;
            const isExpanded = expandedQuestion === i;
            return (
              <div
                key={i}
                className={`review-item ${isCorrect ? "review-correct" : "review-wrong"}`}
                onClick={() => setExpandedQuestion(isExpanded ? null : i)}
              >
                <div className="review-item-header">
                  <span className="review-q-label">Question {i + 1}</span>
                  <div className="review-item-right">
                    {isCorrect ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2.5">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    )}
                    <svg
                      className={`chevron ${isExpanded ? "chevron-up" : ""}`}
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
                {isExpanded && (
                  <div className="review-detail">
                    <p className="review-q-text">{q.question}</p>
                    <p className="review-your-answer">
                      <span className={isCorrect ? "label-correct" : "label-wrong"}>
                        Your answer:
                      </span>{" "}
                      {answers[i] !== undefined ? q.options[answers[i]] : "Not answered"}
                    </p>
                    {!isCorrect && (
                      <p className="review-correct-answer">
                        <span className="label-correct">Correct answer:</span>{" "}
                        {q.options[q.correct]}
                      </p>
                    )}
                    <p className="review-explanation">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <button className="restart-btn" onClick={onRestart}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
          <polyline points="23 4 23 10 17 10" />
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
        </svg>
        Take Quiz Again
      </button>
    </div>
  );
};

export default ResultScreen;
