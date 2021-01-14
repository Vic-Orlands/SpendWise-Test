import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/Forms/SignIn/SignIn';
import SignUp from './components/Forms/SignUp/SignUp';

import Reset from './components/Forms/ResetPassword/Reset.Password';
import Forgot from './components/Forms/ForgotPassword/Forgot.Password';
import ForgotUsername from './components/Forms/ForgotUsername/index';

import Dashboard from './components/Dash/Dashboard-Folder/Dashboard/index';
import ChangePassword from './components/Forms/ChangePassword/ChangePassword';
import Budget from "./components/Dash/Budget-Folder/Budget-Page/index"
import Finance from "./components/Dash/Finance-Folder/Finance-Page/index"
import Expense from './components/Dash/Expense-Folder/Expense-Page/index';

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

const App = () => {
	const existingUser = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
	return (
		<div>
			{existingUser ? (
				<BrowserRouter>
					<div>
						<Switch>
							{/* ----------------------private routes--------------------- */}
							<Route path="/page/chngePass" component={ChangePassword} />
							<Route path="/page/budget" component={Budget} />
							<Route path="/page/finance" component={Finance} />
							<Route path="/page/expense" component={Expense} />
							<Route path="/" component={Dashboard} exact={true} />
						</Switch>
					</div>
				</BrowserRouter>
			) : (
				<BrowserRouter>
					<div>
						<Switch>
							{/* ----------------------public routes--------------------- */}
							<Route path="/" component={SignIn} exact={true} />
							<Route path="/signup" component={SignUp} />
							<Route path="/reset" component={Reset} />
							<Route path="/forgot" component={Forgot} />
							<Route path="/forgotUsername" component={ForgotUsername} />
						</Switch>
					</div>
				</BrowserRouter>
			)}
		</div>
	);
};

export default App;
