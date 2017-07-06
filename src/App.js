import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import AnalyticsListener from './components/AnalyticsListener';
import Routes from './Routes';

const App = () => (
    <BrowserRouter>
        <div>
            <AnalyticsListener/>
            <Nav/>
            <div className="container">
                <Routes/>
            </div>
        </div>
    </BrowserRouter>
);
export default App;
