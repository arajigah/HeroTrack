import React, { Component } from 'react';
import { Container, InputGroup, InputGroupButton, Input, Button } from 'reactstrap';
import HeroCard from '../components/HeroCard.jsx';
import axios from 'axios';
import md5 from 'md5';
import '../../styles/App.css';
const PRIVATE_KEY = '645c1ef534b5bda75510655d366ca00228e5ecaf';
const PUBLIC_KEY = 'a34c2734454eb0574a35e70d8f828d25';

class HeroSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchName: '',
			character: {}
		}

	}

	isEmpty(obj) {
		for(let key in obj) {
			if(obj.hasOwnProperty(key)) {
				return false;
			}
		}

		return true;
	}

	changeValue = (event) => {
		this.setState({
			searchName: event.target.value
		});
	}

	searchHero(name) {
		let ts = new Date().getTime();
		let hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
		let url = 'https://gateway.marvel.com:443/v1/public/characters?name=';
		let getHero = url + name;

		axios.get(getHero, {
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

	render() {
		console.log(this.state);
		let card = !this.isEmpty(this.state.character) ? <HeroCard character={this.state.character} /> : null;

		return (
			<Container>
				<InputGroup>
					<InputGroupButton>
						<Button color="secondary" className='button' onClick={() => this.searchHero(this.state.searchName)}>Show me...</Button>
					</InputGroupButton>
					<Input name='searchName' placeholder="Enter hero name" value={this.state.searchName} onChange={this.changeValue} className='input'/>
				</InputGroup>
				<br />
				<p>Searching for: {this.state.searchName}</p>
				<br />
				<div>
					{card}
				</div>
			</Container>
		);
	}
}

export default HeroSearch;
