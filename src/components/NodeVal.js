import React from 'react'
import { useNode } from '../Store'

const NodeVal = () => {
    const [nodeData] = useNode();
    return (
        <div>
            {nodeData.value}
        </div>
    )
}

export default NodeVal
