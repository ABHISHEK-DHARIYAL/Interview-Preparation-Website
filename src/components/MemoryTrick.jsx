import './MemoryTrick.css';

const typeLabel = {
  mnemonic: 'Mnemonic',
  story: 'Memory Story',
  acronym: 'Acronym',
};

export default function MemoryTrick({ trick }) {
  if (!trick) return null;
  return (
    <div className="memory-trick">
      <div className="memory-trick__icon">🧠</div>
      <div>
        <span className="memory-trick__label">{typeLabel[trick.type] || 'Memory Trick'}</span>
        <p className="memory-trick__text">{trick.text}</p>
      </div>
    </div>
  );
}
