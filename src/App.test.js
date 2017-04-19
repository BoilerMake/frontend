import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from "enzyme";

it('renders without crashing', () => {
  shallow(<App/>)//need to shalow render because redux connect is wonky
});
