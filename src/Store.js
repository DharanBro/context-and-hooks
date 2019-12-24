import React, { useReducer, useContext, createContext } from "react";

export const _nodes = {
    "N1": { title: "Profit", value: 1000 },
    "N2": { title: "Total Cost", value: 1000 },
    "N3": { title: "Revenue", value: 1000 },
};

const NodeContext = createContext();

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return {
                ...state,
                value: state.value + 100,
            };
        default: throw new Error('Unexpected action');
    }
};

export const NodeProvider = ({ children, name }) => {
    const contextValue = useReducer(reducer, _nodes[name]);
    return (
        <NodeContext.Provider value={contextValue}>
            {children}
        </NodeContext.Provider>
    );
};

export const useNode = () => {
    const contextValue = useContext(NodeContext);
    return contextValue;
}

