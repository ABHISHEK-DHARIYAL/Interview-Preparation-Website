import { Link } from 'react-router-dom';
import { isTopicVisited } from '../utils/progress.js';
import './TopicCard.css';

const difficultyColor = {
  Easy: 'green',
  Medium: 'orange',
  Hard: 'purple',
};

export default function TopicCard({ subjectId, topic }) {
  const visited = isTopicVisited(subjectId, topic.id);

  return (
    <Link to={`/subject/${subjectId}/topic/${topic.id}`} className="topic-card">
      {visited && <span className="topic-card__done" title="Visited">✓</span>}
      <h4 className="topic-card__title">{topic.title}</h4>
      <p className="topic-card__desc">{topic.description}</p>
      <div className="topic-card__meta">
        <span className="topic-card__time">⏱ {topic.readingTime} min</span>
        <span className={`topic-card__difficulty topic-card__difficulty--${difficultyColor[topic.difficulty] || 'gray'}`}>
          {topic.difficulty}
        </span>
      </div>
    </Link>
  );
}
