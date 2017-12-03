import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Root from './js/Root.jsx';

const App = () => (
	<BrowserRouter>
		<Root />
	</BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));
