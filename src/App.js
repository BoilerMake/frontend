import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import AnalyticsListener from './components/AnalyticsListener';
import Routes from './Routes';
import ReduxToastr from 'react-redux-toastr'

const App = () => (
    <BrowserRouter>
        <div>
            <AnalyticsListener/>
            <Nav/>
            <div className="container">
                <Routes/>
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="top-center"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                />
            </div>
        </div>
    </BrowserRouter>
);
export default App;
