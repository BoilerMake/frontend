import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import AnalyticsListener from './components/AnalyticsListener';
import Routes from './Routes';
import Footer from './components/Footer';

const App = () => (
    <BrowserRouter>
        <div>
            <AnalyticsListener/>
            <Nav/>
            <Routes/>
            <Footer />
        </div>
    </BrowserRouter>
);
export default App;
