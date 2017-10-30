import React, { Component } from 'react';
import axios from 'axios';
import md5 from 'md5';
import Navbar from './Navbar.jsx';
import HeroCard from './HeroCard.jsx';
const PRIVATE_KEY = '645c1ef534b5bda75510655d366ca00228e5ecaf';
const PUBLIC_KEY = 'a34c2734454eb0574a35e70d8f828d25';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			character: {}
		}
	}

	componentDidMount() {
		let ts = new Date().getTime();
		let hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
		let characterId = '1009718';
		let url = 'https://gateway.marvel.com:443/v1/public/characters/';
		let getWolverine = url + characterId;

		axios.get(getWolverine, {
			params: {
				ts: ts,
				apikey: PUBLIC_KEY,
				hash: hash
			}
		})
		.then(function(response) {
			let character = response.data.data.results[0];
			this.setState({character: character});
		}.bind(this))
		.catch(function(error) {
			console.log(error);
		});
	}

	isEmpty(obj) {
		for(var key in obj) {
		    if(obj.hasOwnProperty(key))
		        return false;
			}
    	return true;
	}

	render() {
		let card;
		if(!this.isEmpty(this.state.character)) {
			card = <HeroCard character={this.state.character} />
		} else {
			card = null;
		}

		return (
		  <div className='container'>
			  <Navbar />
			  {card}
		  </div>
		);
	}
}

export default App;
