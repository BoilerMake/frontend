import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import GAListener from './components/GAListener';
import Routes from './Routes';
import Footer from './components/Footer';

const App = () => (
    <BrowserRouter>
        <div>
            <GAListener/>
            <Nav/>
            <div className="container">
                <Routes/>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
);
export default App;
