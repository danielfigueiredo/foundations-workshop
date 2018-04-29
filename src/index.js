import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './presentation';
import registerServiceWorker from './registerServiceWorker';

// Import prism css for code highlighting used by spectacle-code-slide extension
import './assets/prism.css';

ReactDOM.render(<Presentation />, document.getElementById('root'));
registerServiceWorker();
