import React from 'react';
import Display from '../../design/Display';
import Settings from '../../design/Setting';

import './Dashboard.css';

export default class Dashboard extends React.Component {
	state = {
		tshirtColour: 'black',
		upperText: 'Text up high',
		lowerText: 'Text down low',
		textSize: 44,
		textColour: 'red'
	}

	handleTshirtColour = (e) => {
		e.preventDefault();
		this.setState({tshirtColour: e.target.id});
	}

	handleUpperText = (e) => {
		e.preventDefault();
		this.setState({upperText: e.target.value});
	}

	handleLowerText = (e) => {
		e.preventDefault();
		this.setState({lowerText: e.target.value});
	}

	handleSizeText = (e) => {
		e.preventDefault();
		this.setState({textSize: e.target.value});
	}

	formatText() {
		const size = this.state.textSize;
		return parseInt(size);
	}

	handleTextColour = (e) => {
		this.setState({textColour: e.target.value});
	}

	handleSaveAndPreview = (e) => {
		e.preventDefault();
		
		localStorage.setItem(
			"tshirtColour",
			this.state.tshirtColour
		);
		localStorage.setItem(
			"savedUpperText",
			this.state.upperText
		);
		localStorage.setItem(
			"savedLowerText",
			this.state.lowerText
		);
		localStorage.setItem(
			"textSize",
			this.state.textSize
		);
		localStorage.setItem(
			"textColour",
			this.state.textColour
		);
	}

	render() {
		return (
			<div className="container py-2">
				<h1 className="text-center py-2">BlackMagic Designs coding challenge</h1>
				<div className="row">
					<div className="col-lg-4">
						<Settings
							colour={this.handleTshirtColour}
							upperText={this.handleUpperText}
							lowerText={this.handleLowerText}
							textSize={this.handleSizeText}
							textColour={this.handleTextColour}/>

							<a href={`/review`}
							   onClick={this.handleSaveAndPreview}
							   className="btn btn-primary btn-sm-mb-2">Review and submit</a>

					</div>

					<div className="col-lg-8">
						<Display
							display={this.state}
							textFormat={this.formatText()}/>
					</div>
				</div>
			</div>
		);
	}
}
