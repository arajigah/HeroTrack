import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Collapse } from 'reactstrap';
import '../../styles/HeroCard.css';
// image src format:
// http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge.jpg

class HeroCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false
		}

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
    	this.setState({ collapse: !this.state.collapse });
	}

	render() {
		let character = this.props.character;
		let image = character.thumbnail.path + '/standard_fantastic.' + character.thumbnail.extension;

		return (
	      <div>
	        <Card className='card'>
			  <CardImg top width="100%" src={image} alt="Card image cap" />
	          <CardBody>
	            <CardTitle onClick={this.toggle}>{character.name}</CardTitle>
				<Collapse isOpen={this.state.collapse}>
					<CardText>{character.description}</CardText>
  			  	</Collapse>

	          </CardBody>
	        </Card>
	      </div>
	    );
	}
};

export default HeroCard;
