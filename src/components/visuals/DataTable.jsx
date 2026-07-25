import './visuals.css';

export default function DataTable({ title, columns = [], rows = [] }) {
  return (
    <div className="visual-block">
      {title && <p className="visual-block__title">{title}</p>}
      <div className="data-table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
