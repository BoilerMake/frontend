import React from 'react';
import ReactDOM from 'react-dom';
import FAQ from './FAQ';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MemoryRouter>
            <FAQ />
        </MemoryRouter>
        , div);
});

