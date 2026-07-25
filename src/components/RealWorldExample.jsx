import './RealWorldExample.css';

export default function RealWorldExample({ text }) {
  if (!text) return null;
  return (
    <div className="real-world">
      <div className="real-world__icon">💡</div>
      <div>
        <span className="real-world__label">Real World Example</span>
        <p className="real-world__text">{text}</p>
      </div>
    </div>
  );
}
