import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './Test';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('scream function', () => {
  it('determines screams', () => {
    expect(Test.scream('aaaaaaaaa')).toBe(true);
  });
});
