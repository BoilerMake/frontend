import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import GAListener from './components/GAListener';
import Routes from './Routes';

const App = () => (
    <BrowserRouter>
        <div>
            <GAListener/>
            <Nav/>
            <div className="container">
                <Routes/>
            </div>
        </div>
    </BrowserRouter>
);
export default App;
