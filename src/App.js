import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './components/Forms/SignIn/SignIn';
import SignUp from './components/Forms/SignUp/SignUp';

import Reset from './components/Forms/ResetPassword/Reset.Password';
import Forgot from './components/Forms/ForgotPassword/Forgot.Password';
import ForgotUsername from './components/Forms/ForgotUsername/index';

import Dashboard from './components/Dash/Dashboard-Folder/Dashboard/index';
import ChangePassword from './components/Forms/ChangePassword/ChangePassword';
import Budget from './components/Dash/Budget-Folder/Budget-Page/index';
import Expense from './components/Dash/Expense-Folder/Expense-Page/index';
import Goals from './components/Dash/Goals-Folder/index';
import Finance from './components/Dash/Finance-Folder/Finance-Page/index';

let existingUser = JSON.parse(localStorage.getItem('authToken')) || JSON.parse(sessionStorage.getItem('authToken'));

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			existingUser ? (
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
					{/* ----------------------public form routes--------------------- */}
					<Route path="/reset" component={Reset} />
					<Route path="/forgot" component={Forgot} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/forgotUsername" component={ForgotUsername} />

					{/* ----------------------private pages routes--------------------- */}
					<PrivateRoute exact path={'/'} component={Dashboard} />
					<PrivateRoute path="/page/goals" component={Goals} />
					<PrivateRoute path="/page/budget" component={Budget} />
					<PrivateRoute path="/page/finance" component={Finance} />
					<PrivateRoute path="/page/expense" component={Expense} />
					<PrivateRoute path="/page/chngePass" component={ChangePassword} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};
export default App;
