import './visuals.css';

export default function ComparisonCard({ title, left, right }) {
  return (
    <div className="visual-block">
      {title && <p className="visual-block__title">{title}</p>}
      <div className="comparison-card">
        <div className="comparison-card__side comparison-card__side--left">
          <div className="comparison-card__side-title">{left.title}</div>
          {left.points.map((point, i) => (
            <div className="comparison-card__point" key={i}>{point}</div>
          ))}
        </div>
        <div className="comparison-card__side comparison-card__side--right">
          <div className="comparison-card__side-title">{right.title}</div>
          {right.points.map((point, i) => (
            <div className="comparison-card__point" key={i}>{point}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
