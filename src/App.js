import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Nav from './components/Nav';
import NavLeft from './components/NavLeft';
import Routes from './Routes';

const App = () => (
        <Router>
            <div>
                <Nav/>
                <NavLeft/>
                <div className="container">
                    <Routes/>
                </div>
            </div>
        </Router>
)
export default App
