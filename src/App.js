import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './components/Forms/SignIn/SignIn';
import SignUp from './components/Forms/SignUp/SignUp';

import Reset from './components/Forms/ResetPassword/Reset.Password';
import Forgot from './components/Forms/ForgotPassword/Forgot.Password';

import Dashboard from './components/Dash/Dashboard/index';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			localStorage.getItem('loggedIn') ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/', state: { from: props.location } }} />
			)}
	/>
);

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" component={SignIn} exact={true} />
					<Route path="/signup" component={SignUp} />

					<PrivateRoute path="/reset" component={Reset} />
					<PrivateRoute path="/forgot" component={Forgot} />
					<PrivateRoute path="/dash" component={Dashboard} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
