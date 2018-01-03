import React from 'react';
import ReactDOM from 'react-dom';
import UmbAlgoApp from '_components/UmbAlgoApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UmbAlgoApp />, div);
});
