import './CommonMistakes.css';

export default function CommonMistakes({ mistakes = [] }) {
  if (!mistakes.length) return null;
  return (
    <div className="common-mistakes">
      <p className="common-mistakes__heading">Common Mistakes</p>
      {mistakes.map((m, i) => (
        <div className="common-mistakes__item" key={i}>
          <span className="common-mistakes__icon">⚠</span>
          <div>
            <p className="common-mistakes__title">{m.title}</p>
            <p className="common-mistakes__detail">{m.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
