import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Home from './Home';
import About from './About';
import Nav from './Nav';

const App = () => (
    <Router>
        <div>
            <Nav/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        </div>
    </Router>
)
export default App