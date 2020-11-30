import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" component={SignIn} exact={true} />
					<Route path="/signup" component={SignUp} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
