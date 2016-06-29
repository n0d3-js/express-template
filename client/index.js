import App from './components/App';
import React from 'react';
import { render } from 'react-dom';
require('es6-promise').polyfill();
require('isomorphic-fetch');

render(<App />, document.getElementById('root'));
