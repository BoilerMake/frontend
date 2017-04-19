import React from 'react'
import {
    Route
} from 'react-router-dom'


//STATIC PAGES
import Home from './pages/Landing';
import About from './pages/About';
import Code from './pages/Code';

//
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => (
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/code" component={Code}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
    </div>
)
export default App