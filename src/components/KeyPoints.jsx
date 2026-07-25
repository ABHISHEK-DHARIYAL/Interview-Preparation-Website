import './KeyPoints.css';

export default function KeyPoints({ points = [] }) {
  if (!points.length) return null;
  return (
    <div className="key-points">
      <p className="key-points__heading">Key Points</p>
      <ul className="key-points__list">
        {points.map((point, i) => (
          <li key={i} className="key-points__item">
            <span className="key-points__check">✔</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
