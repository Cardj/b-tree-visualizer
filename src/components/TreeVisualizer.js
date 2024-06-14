// src/components/TreeVisualizer.js
import React from 'react';

const TreeVisualizer = ({ node }) => {
  if (!node) return null;

  return (
    <div className="tree-node">
      <div>{node.keys.join(', ')}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {node.children.map((child, index) => (
          <TreeVisualizer key={index} node={child} />
        ))}
      </div>
    </div>
  );
};

export default TreeVisualizer;
