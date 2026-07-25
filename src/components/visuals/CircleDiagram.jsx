import './visuals.css';

export default function CircleDiagram({ title, center, satellites = [] }) {
  const radius = 36; // percent of container width/height (container is a 1:1 square)
  const count = satellites.length;

  return (
    <div className="visual-block">
      {title && <p className="visual-block__title">{title}</p>}
      <div className="circle-diagram">
        {satellites.map((label, i) => {
          const angle = (2 * Math.PI * i) / count - Math.PI / 2;
          const x = radius * Math.cos(angle); // percent
          const y = radius * Math.sin(angle); // percent
          const length = Math.sqrt(x * x + y * y); // percent
          const rot = (Math.atan2(y, x) * 180) / Math.PI;
          return (
            <span key={i}>
              <span
                className="circle-diagram__line"
                style={{ width: `${length}%`, transform: `rotate(${rot}deg)` }}
              />
              <span
                className="circle-diagram__satellite"
                style={{ left: `${50 + x}%`, top: `${50 + y}%` }}
              >
                {label}
              </span>
            </span>
          );
        })}
        <div className="circle-diagram__center">{center}</div>
      </div>
    </div>
  );
}
