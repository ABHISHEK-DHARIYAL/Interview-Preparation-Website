import { Link } from 'react-router-dom';
import ProgressRing from './ProgressRing.jsx';
import { getSubjectProgress } from '../utils/progress.js';
import './SubjectCard.css';

export default function SubjectCard({ subject }) {
  const progress = getSubjectProgress(subject.id, subject.topics.length);

  return (
    <Link to={`/subject/${subject.id}`} className={`subject-card subject-card--${subject.color}`}>
      <div className="subject-card__top">
        <div className="subject-card__icon">{subject.icon}</div>
        <ProgressRing progress={progress} size={40} stroke={4} />
      </div>
      <h3 className="subject-card__name">{subject.name}</h3>
      <p className="subject-card__desc">{subject.description}</p>
      <div className="subject-card__footer">
        <span>{subject.topics.length} topics</span>
        <span className="subject-card__arrow">Open →</span>
      </div>
    </Link>
  );
}
