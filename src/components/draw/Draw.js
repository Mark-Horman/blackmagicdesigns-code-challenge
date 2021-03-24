import React, {Component} from "react";
import CanvasDraw from "react-canvas-draw";

class Draw extends Component {
	state = {
		brushColour: "red",
		width: "300px",
		height: "300px",
		brushRadius: 2,
		gridColour: "green"
	};

	render() {
		return (
			<div className="drawing-wrapper">
				<button className="btn btn-secondary"
				        onClick={() => {
					        localStorage.setItem(
						        "savedDrawing",
						        this.saveableCanvas.getSaveData()
					        );
				        }}
				>Save
				</button>

				<button className="btn btn-secondary"
				        onClick={() => {
					        this.saveableCanvas.clear();
				        }}
				>Clear
				</button>

				<button className="btn btn-secondary"
				        onClick={() => {
					        this.saveableCanvas.undo();
				        }}
				>Undo
				</button>

				<CanvasDraw ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
				            brushRadius={parseInt(this.state.brushRadius)}
				            brushColor={this.state.brushColour}
				            canvasHeight={this.state.height}
				            canvasWidth={this.state.width}
				            gridColor={this.state.gridColour}/>
			</div>
		);
	}
}

export default Draw;
