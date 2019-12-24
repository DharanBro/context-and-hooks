import React from 'react';
import { ReusableProvider } from "reusable";
import Nodes from './components/Nodes';

const App = () => {
    return (
        <ReusableProvider> {/* no init code */}

            <Nodes />

        </ReusableProvider>
    )
}

export default App;
