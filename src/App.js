import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Reset from './components/Reset.Password';
import Forgot from './components/Forgot.Password';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" component={SignIn} exact={true} />
					<Route path="/signup" component={SignUp} />
					<Route path="/reset" component={Reset} />
					<Route path="/forgot" component={Forgot} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
