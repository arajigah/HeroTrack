import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './HeroCard.css';
// image src format:
// http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge.jpg

class HeroCard extends Component {
	render() {
		let character = this.props.character;
		let image = character.thumbnail.path + '/standard_fantastic.' + character.thumbnail.extension;
		console.log(JSON.stringify(image));

		return (
	      <div>
	        <Card className='card'>
			  <CardImg top width="100%" src={image} alt="Card image cap" />
	          <CardBody>
	            <CardTitle>{character.name}</CardTitle>
	            <CardSubtitle>Card subtitle</CardSubtitle>
	            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
	            <Button>Button</Button>
	          </CardBody>
	        </Card>
	      </div>
	    );
	}
};

export default HeroCard;
