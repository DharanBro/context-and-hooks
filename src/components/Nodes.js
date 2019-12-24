import React from 'react'
import Node from './Node'
import { _nodes, NodeProvider } from '../Store'

const renderNodes = () => {
    const nodeElements = [];
    Object.keys(_nodes).forEach(nodeName => {
        nodeElements.push(
            <NodeProvider key={nodeName} name={nodeName}>
                <Node />
            </NodeProvider>
        )
    });
    return nodeElements;
}
const Nodes = () => {
    return <>{renderNodes()}</>
}

export default Nodes;
