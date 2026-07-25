import './RevisionCard.css';

export default function RevisionCard({ points = [] }) {
  if (!points.length) return null;
  return (
    <div className="revision-card">
      <p className="revision-card__heading">⏱ 30-Second Revision</p>
      <ul className="revision-card__list">
        {points.map((point, i) => (
          <li key={i}>✔ {point}</li>
        ))}
      </ul>
    </div>
  );
}
