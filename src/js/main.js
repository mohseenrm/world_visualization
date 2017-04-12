'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard.jsx';
//Dashboard is simply the app to be used. Replace with react structure
(() => {
	const name = 'MoMo';
	console.log(`Hello ${name}! from webpack`);
	ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
})();