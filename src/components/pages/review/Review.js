import React from 'react';
import Preview from "../../design/Preview";
import CreateTshirt from './CreateTshirt'

export default class Review extends React.Component {
	state = {
		tshirtColour: localStorage.getItem("tshirtColour"),
		upperText: localStorage.getItem("savedUpperText"),
		lowerText: localStorage.getItem("savedLowerText"),
		textSize: parseInt(localStorage.getItem("textSize")),
		textColour: localStorage.getItem("textColour"),
		drawing: localStorage.getItem("savedDrawing")
	}

	handleSubmit= (e) => {
		e.preventDefault();
		CreateTshirt(this.state);
	}

	render() {
		return (
			<div className="container py-2">
				<h1 className="text-center py-2">BlackMagic Designs coding challenge</h1>
				<div className="row">
					<div className="col-lg-8">
						<Preview preview={this.state}/>
					</div>

					<div className="col-lg-4">
						<button type="submit"
						        className="btn btn-primary btn-sm-mb-2"
						        onClick={this.handleSubmit}>Submit</button>
					</div>
				</div>
			</div>
		);
	}
}
