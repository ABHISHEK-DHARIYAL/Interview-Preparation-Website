import { useParams, Link, Navigate } from 'react-router-dom';
import { getSubject } from '../data/subjects.js';
import TopicCard from '../components/TopicCard.jsx';
import ProgressRing from '../components/ProgressRing.jsx';
import { getSubjectProgress } from '../utils/progress.js';
import './Subject.css';

export default function Subject() {
  const { subjectId } = useParams();
  const subject = getSubject(subjectId);

  if (!subject) return <Navigate to="/" replace />;

  const progress = getSubjectProgress(subject.id, subject.topics.length);

  return (
    <div className="subject-page container">
      <div className="subject-page__crumb">
        <Link to="/">Home</Link> <span>/</span> <span>{subject.name}</span>
      </div>

      <div className={`subject-page__header subject-page__header--${subject.color}`}>
        <div className="subject-page__header-icon">{subject.icon}</div>
        <div className="subject-page__header-text">
          <h1>{subject.name}</h1>
          <p>{subject.description}</p>
        </div>
        <div className="subject-page__header-ring">
          <ProgressRing progress={progress} size={64} stroke={5} />
          <span>{subject.topics.length} topics</span>
        </div>
      </div>

      <div className="subject-page__grid">
        {subject.topics.map((topic) => (
          <TopicCard key={topic.id} subjectId={subject.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}
