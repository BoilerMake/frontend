import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

//STATIC PAGES
import Home from './pages/Landing';
import About from './pages/About';
import Code from './pages/Code';

//
import Register from './pages/Register';

//MISC
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
                        <Route path="/register" component={Register}/>
                    </Switch>
                </div>
            </div>
        </Router>
)
export default App