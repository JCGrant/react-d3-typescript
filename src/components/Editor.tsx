import * as React from 'react';
import Node, { NodeProps } from './Node';

interface EditorState {
  nodes: NodeProps[];
}

export default class Editor extends React.Component<{}, EditorState> {
  constructor() {
    super();
    this.state = {
      nodes: [
        {
          id: 1,
          position: {
            x: 50,
            y: 50,
          },
        },
      ],
    };
  }

  render() {
    return (
      <svg width={500} height={500}>
        <g>
          {this.state.nodes.map((node) => <Node key={node.id} {...node} />)}
        </g>
      </svg>
    );
  }
}
