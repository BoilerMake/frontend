import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Home from './pages/Landing';
import About from './pages/About';
import Code from './pages/Code';
import Nav from './components/Nav';

const App = () => (
    <Router>
        <div>
            <Nav/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/code" component={Code}/>
                </Switch>
            </div>
        </div>
    </Router>
)
export default App