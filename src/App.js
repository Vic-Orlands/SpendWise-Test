import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './components/Forms/SignIn/SignIn';
import SignUp from './components/Forms/SignUp/SignUp';

import Reset from './components/Forms/ResetPassword/Reset.Password';
import Forgot from './components/Forms/ForgotPassword/Forgot.Password';
import ForgotUsername from './components/Forms/ForgotUsername/index';

import Dashboard from './components/Dash/Dashboard/index';
import ChangePassword from './components/Forms/ChangePassword/ChangePassword';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			localStorage.getItem('loggedIn') ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
			)}
	/>
);

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<PrivateRoute path="/" component={Dashboard} exact={true} />

					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/reset" component={Reset} />
					<Route path="/forgot" component={Forgot} />
					<Route path="/forgotUsername" component={ForgotUsername} />

					{/* ----------------------private routes--------------------- */}
					<PrivateRoute path="/chngePass" component={ChangePassword} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
