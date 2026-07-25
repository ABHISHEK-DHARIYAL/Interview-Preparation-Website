import { useState } from 'react';
import './InterviewQuestions.css';

export default function InterviewQuestions({ questions = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!questions.length) return null;

  return (
    <div className="interview-qs">
      <p className="interview-qs__heading">Top Interview Questions</p>
      <div className="interview-qs__list">
        {questions.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div className={`interview-qs__item ${isOpen ? 'interview-qs__item--open' : ''}`} key={i}>
              <button
                className="interview-qs__question"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span className="interview-qs__chevron">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p className="interview-qs__answer">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
