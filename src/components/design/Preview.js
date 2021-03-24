import React from 'react';

import PreviewDrawing from '../draw/PreviewDrawing';
import './Display.css';

const urlTshirtImageBase = 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/';

const Preview = ({preview}) => {

	return (<div className="card card-content">
		<p className="text-center">Here's a preview of your custom designed tshirt</p>
		<div className="tshirt-image text-center">
			<img className="img-responsive"
			     src={`${urlTshirtImageBase}${preview.tshirtColour}`}
			     alt="img-Tshirt"/>
		</div>

		<div className="tshirt-text text-center">
			<div className="upperText">
				<p style={{fontSize: preview.textSize, color: preview.textColour}}>{`${preview.upperText}`}</p>
			</div>

			<PreviewDrawing />

			<div className="lowerText">
				<p style={{fontSize: preview.textSize, color: preview.textColour}}>{`${preview.lowerText}`}</p>
			</div>
		</div>

	</div>)
}

export default Preview;
