import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import Globaltyles from './styles/global';

const App: React.FC = () => (
    <>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
        <Globaltyles/>
    </>
);

export default App;
