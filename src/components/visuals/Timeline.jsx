import './visuals.css';

export default function Timeline({ title, events = [] }) {
  return (
    <div className="visual-block">
      {title && <p className="visual-block__title">{title}</p>}
      <div className="timeline">
        {events.map((event, i) => (
          <div className="timeline__item" key={i}>
            <div className="timeline__marker-wrap">
              <div className="timeline__dot" />
              {i < events.length - 1 && <div className="timeline__line" />}
            </div>
            <div className="timeline__content">{event}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
