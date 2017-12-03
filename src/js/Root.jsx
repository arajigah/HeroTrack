import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import '../styles/App.css';

// Component imports
import Navigation from '../js/navigation/Navigation.jsx';
import HomePage from './container/HomePage.jsx';
import HeroSearch from './container/HeroSearch.jsx';


class Root extends Component {

	render() {
		return (
			<div>
				<Navigation>
					<Switch>
						<Route exact path="/" component={HomePage}/>
						<Route path="/search" component={HeroSearch}/>
					</Switch>
				</Navigation>
			</div>
		);
	}
}

export default Root;
