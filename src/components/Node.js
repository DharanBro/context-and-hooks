import React from 'react'
import { useNode } from '../Store';
import NodeVal from './NodeVal'
import NodeIncrementor from './NodeIncrementor'

const Node = () => {
    console.log(useNode()[0].title, "--", "Render")
    return (
        <div>
            <NodeVal />
            <NodeIncrementor />
        </div>
    )
}

export default Node
