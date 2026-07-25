import './visuals.css';

function TreeNode({ node }) {
  return (
    <div className="tree-diagram__child">
      <div className="tree-diagram__node">{node.label}</div>
      {node.children && node.children.length > 0 && (
        <>
          <div className="tree-diagram__branch-line" />
          <div className="tree-diagram__children">
            {node.children.map((child, i) => (
              <TreeNode key={i} node={child} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function TreeDiagram({ title, root, children = [] }) {
  return (
    <div className="visual-block">
      {title && <p className="visual-block__title">{title}</p>}
      <div className="tree-diagram">
        <div className="tree-diagram__root">{root}</div>
        <div className="tree-diagram__branch-line" />
        <div className="tree-diagram__children">
          {children.map((child, i) => (
            <TreeNode key={i} node={child} />
          ))}
        </div>
      </div>
    </div>
  );
}
