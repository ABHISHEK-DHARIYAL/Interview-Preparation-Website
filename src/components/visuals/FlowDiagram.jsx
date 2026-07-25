import './visuals.css';

export default function FlowDiagram({ title, steps = [] }) {
  return (
    <div className="visual-block">
      {title && <p className="visual-block__title">{title}</p>}
      <div className="flow-diagram">
        {steps.map((step, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="flow-diagram__step">{step}</div>
            {i < steps.length - 1 && <div className="flow-diagram__arrow">↓</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
