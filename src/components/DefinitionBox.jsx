import './DefinitionBox.css';

export default function DefinitionBox({ quickDefinition, easyExplanation, whyImportant }) {
  return (
    <div className="definition-box">
      {quickDefinition && (
        <div className="definition-box__block definition-box__block--quick">
          <span className="definition-box__label">Quick Definition</span>
          <p>{quickDefinition}</p>
        </div>
      )}
      {easyExplanation && (
        <div className="definition-box__block">
          <span className="definition-box__label">Easy Explanation</span>
          <p>{easyExplanation}</p>
        </div>
      )}
      {whyImportant && (
        <div className="definition-box__block definition-box__block--why">
          <span className="definition-box__label">Why It Matters</span>
          <p>{whyImportant}</p>
        </div>
      )}
    </div>
  );
}
