import React from 'react';
import './Setting.css';

const Settings = ({colour, upperText, lowerText, textSize, textColour}) => {

	return (
		<div className="card bg-light container py-2">
			<h2 className="text-center">Settings</h2>
			<hr/>
			<h3> T-shirt colour</h3>
			<div className="tshirt-colour">
				<button id="white" className="white" onClick={colour}>
					<span className="sr-only">White tshirt</span>
				</button>
				<button id="black" className="black" onClick={colour}>
					<span className="sr-only">Black tshirt</span>
				</button>
				<button id="grey" className="grey" onClick={colour}>
					<span className="sr-only">Grey tshirt</span>
				</button>
				<button id="blue" className="blue" onClick={colour}>
					<span className="sr-only">Blue tshirt</span>
				</button>
				<button id="red" className="red" onClick={colour}>
					<span className="sr-only">Red tshirt</span>
				</button>
			</div>

			<hr/>
			<h3>T-shirt text </h3>
			<input onChange={upperText} type="text" className="form-control form-control-sm-mb-2"
			       placeholder="Upper Text"/>
			<input onChange={lowerText} type="text" className="form-control form-control-sm-mb-2"
			       placeholder="Lower Text"/>

			<hr/>
			<h3>Text size</h3>
			<input onChange={textSize} type="range" min="25" max="44"/>

			<hr/>
			<h3>Text colour</h3>

			<select onChange={textColour} className="form-control form-control-sm-mb-2">
				<option>Red</option>
				<option>Blue</option>
				<option>white</option>
				<option>black</option>
			</select>
		</div>
	);
}

export default Settings;
