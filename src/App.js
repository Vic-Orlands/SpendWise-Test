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

const App = () => {
	// let existingUser = JSON.parse(localStorage.getItem('authToken')) && JSON.parse(sessionStorage.getItem('authToken'));

	// const PrivateRoute = ({ component: Component, ...rest }) => (
	// 	<Route
	// 		{...rest}
	// 		render={(props) =>
	// 			existingUser ? (
	// 				<Component {...props} />
	// 			) : (
	// 				<Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
	// 			)}
	// 	/>
	// );

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
					<Route exact={true} path={'/'} component={Dashboard} />
					<Route path="/page/goals" component={Goals} />
					<Route path="/page/budget" component={Budget} />
					<Route path="/page/finance" component={Finance} />
					<Route path="/page/expense" component={Expense} />
					<Route path="/page/chngePass" component={ChangePassword} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};
export default App;
