import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UmbAlgoApp from './UmbAlgoApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UmbAlgoApp />, document.getElementById('root'));
registerServiceWorker();
