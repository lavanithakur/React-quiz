import React from "react";
import "./SS.css";

const StartScreen = ({ totalQuestions, onStart }) => {
  return (
    <div className="start-screen">
      <div className="start-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5b6af0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      </div>

      <h1 className="start-title">React Knowledge Quiz</h1>
      <p className="start-desc">
        Test your knowledge of React, JavaScript, and web development. Answer
        multiple choice questions and see how well you know the fundamentals!
      </p>

      <div className="stats-grid">
        <div className="stat-card stat-blue">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5b6af0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          <span className="stat-value">{totalQuestions}</span>
          <span className="stat-label">Questions</span>
        </div>
        <div className="stat-card stat-purple">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9b59b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="stat-value stat-purple-text">5:00</span>
          <span className="stat-label">Minutes</span>
        </div>
        <div className="stat-card stat-green">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="8 6 21 6 21 20 8 20 8 6" />
            <path d="M8 12H3" /><path d="M8 18H3" />
            <circle cx="5" cy="6" r="1" fill="#27ae60" />
          </svg>
          <span className="stat-value stat-green-text">100%</span>
          <span className="stat-label">Max Score</span>
        </div>
      </div>

      <div className="rules-box">
        <h3 className="rules-title">Quiz Rules</h3>
        <ul className="rules-list">
          {[
            "Each question has multiple choice answers",
            "You have 5 minutes to complete all questions",
            "Once you select an answer, you'll see the explanation",
            "You can navigate back to previous questions",
          ].map((rule, i) => (
            <li key={i} className="rule-item">
              <span className="rule-num">{i + 1}</span>
              {rule}
            </li>
          ))}
        </ul>
      </div>

      <button className="start-btn" onClick={onStart}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
