import React, { Component } from 'react';
import './App.css';

import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
	render() {
		const options = {
			// title: {
			// 	text: 'Analytical Column Chart'
			// },
			data: [
				{
					type: 'column',
					dataPoints: [
						{ label: 'Waste Vendors', y: 30 },
						{ label: 'Waste Pickers', y: 15 },
						{ label: 'Waste Generators', y: 40 },
						{ label: 'Waste Recyclers', y: 25 },
						{ label: 'Eye Witnesses', y: 15 },
						{ label: 'Users', y: 40 },
						{ label: 'Waste Agencies', y: 4 }
					]
				}
			]
		};

		return (
			<div className="chartBody">
        <h2>Analytical Column Chart</h2>
				<CanvasJSChart
          options={options}
          id="mainChart"
					/* onRef = {ref => this.chart = ref} */
				/>
			</div>
		);
	}
}

export default App;
