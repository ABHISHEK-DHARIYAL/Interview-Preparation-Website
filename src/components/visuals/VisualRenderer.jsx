import FlowDiagram from './FlowDiagram.jsx';
import CircleDiagram from './CircleDiagram.jsx';
import TreeDiagram from './TreeDiagram.jsx';
import ComparisonCard from './ComparisonCard.jsx';
import DataTable from './DataTable.jsx';
import Timeline from './Timeline.jsx';

export default function VisualRenderer({ visual }) {
  if (!visual) return null;

  switch (visual.type) {
    case 'flow':
      return <FlowDiagram title={visual.title} steps={visual.steps} />;
    case 'circle':
      return <CircleDiagram title={visual.title} center={visual.center} satellites={visual.satellites} />;
    case 'tree':
      return <TreeDiagram title={visual.title} root={visual.root} children={visual.children} />;
    case 'comparison':
      return <ComparisonCard title={visual.title} left={visual.left} right={visual.right} />;
    case 'table':
      return <DataTable title={visual.title} columns={visual.columns} rows={visual.rows} />;
    case 'timeline':
      return <Timeline title={visual.title} events={visual.events} />;
    default:
      return null;
  }
}
