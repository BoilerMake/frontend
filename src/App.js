import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import AnalyticsListener from './components/AnalyticsListener';
import Routes from './Routes';
import ReduxToastr from 'react-redux-toastr'
import Footer from './components/Footer';

const App = () => (
    <BrowserRouter>
        <div className="body">
          <div className="content">
            <AnalyticsListener/>
            <Nav/>
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
        <Footer />
        </div>
    </BrowserRouter>
);
export default App;
