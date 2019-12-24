import React from 'react'
import { useNode } from '../Store';

const NodeIncrementor = () => {
    const [, dispatch] = useNode();
    return (
        <div>
            <button onClick={() => {
                dispatch("increment");
            }}>add</button>
        </div>
    )
}

export default NodeIncrementor
