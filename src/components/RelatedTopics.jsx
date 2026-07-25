import { Link } from 'react-router-dom';
import { getSubject } from '../data/subjects.js';
import './RelatedTopics.css';

export default function RelatedTopics({ subjectId, topicIds = [] }) {
  const subject = getSubject(subjectId);
  if (!subject || !topicIds.length) return null;

  const topics = topicIds
    .map((id) => subject.topics.find((t) => t.id === id))
    .filter(Boolean);

  if (!topics.length) return null;

  return (
    <div className="related-topics">
      <p className="related-topics__heading">You should study next</p>
      <div className="related-topics__chain">
        {topics.map((topic, i) => (
          <span key={topic.id} className="related-topics__step">
            <Link to={`/subject/${subjectId}/topic/${topic.id}`} className="related-topics__pill">
              {topic.title}
            </Link>
            {i < topics.length - 1 && <span className="related-topics__arrow">→</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
