import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Dashboard from './components/pages/dashboard/Dashboard';
import Review from './components/pages/review/Review'
import './App.css';

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<Dashboard/>
					</Route>
					<Route path="/review">
						<Review/>
					</Route>
				</Switch>
			</Router>
		)
	}
}

