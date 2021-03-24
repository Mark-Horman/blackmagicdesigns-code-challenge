import React from 'react';

import Draw from '../draw/Draw';
import './Display.css';

const urlTshirtImageBase = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/';

const Display = ({display, textFormat}) => {

	return (<div className="card card-content">
		<p className="text-center">Draw your custom design in the grid in the center of the t-shirt</p>
		<div className="tshirt-image text-center">
			<img className="img-responsive"
			     src={`${urlTshirtImageBase}${display.tshirtColour}`}
			     alt="img-Tshirt"/>
		</div>

		<div className="tshirt-text text-center">
			<div className="upperText">
				<p style={{fontSize: textFormat, color: display.textColour}}>{display.upperText}</p>
			</div>

			 <Draw />

			<div className="lowerText">
				<p style={{fontSize: textFormat, color: display.textColour}}>{display.lowerText}</p>
			</div>
		</div>

	</div>)
}

export default Display;
