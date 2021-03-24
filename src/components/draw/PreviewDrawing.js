import React, {Component} from "react";
import CanvasDraw from "react-canvas-draw";

class PreviewDrawing extends Component {
	state = {
		brushColour: "red",
		width: "300px",
		height: "300px",
		brushRadius: 2
	};

	render() {
		return (
			<CanvasDraw
				disabled
				hideGrid
				hideInterface
				ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
				saveData={localStorage.getItem("savedDrawing")}
				brushRadius={parseInt(this.state.brushRadius)}
				brushColor={this.state.brushColour}
				canvasHeight={this.state.height}
				canvasWidth={this.state.width}
			/>
		);
	}
}

export default PreviewDrawing;
