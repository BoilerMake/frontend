import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter>
        <Home />
        </MemoryRouter>
        , div);
});

