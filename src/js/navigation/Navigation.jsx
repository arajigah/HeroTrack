import React, { Component } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
				<Navbar color="faded" light expand="md">
					<NavbarBrand href="/">reactstrap</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink tag={RouterNavLink} exact to='/'>Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={RouterNavLink} to='/search'>Github</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				{this.props.children}
			</div>
		);
	}
}

export default NavBar;
