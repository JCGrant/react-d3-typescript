import * as React from 'react';

interface Position {
  x: number;
  y: number;
}

export interface NodeProps {
  id: number;
  position: Position;
}

interface NodeState {
  position: Position;
}

export default class Node extends React.Component<NodeProps, NodeState> {
  constructor(props: NodeProps) {
    super(props);
    this.state = {
      position: props.position,
    };
  }

  render() {
    const {x, y} = this.state.position;
    return (
      <circle cx={x} cy={y} r={5} />
    );
  }
}
