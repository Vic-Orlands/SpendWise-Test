import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Hub from './Hub';
import Home from './pages/Home';
import DumpSite from './pages/DumpSites';
import Analytics from './pages/Analytics';

import Users from './pages/Users';
import Pickers from './pages/users.pages/Pickers';
import Agencies from './pages/users.pages/Agencies';
import Collecctors from './pages/users.pages/Collectors';

import FullMessage from './pages/FullMessage';
import userDetails from './pages/users.pages/Details';

import axios from 'axios';

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			localStorage.getItem('user') ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/', state: { from: props.location } }} />
			)}
	/>
);

const Router = () => {
	const checkLoginStatus = () => {
		axios.get('http://localhost:3000', { withCredentials: true }).then((res) => {
			console.log(res);
		});
	};

	useEffect(() => {
		checkLoginStatus();
	});

	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" component={Login} exact={true} />
					<Route path="/hub" component={Hub} />
					<Route path="/home" component={Home} />
					<Route path="/message" component={FullMessage} />
					<Route path="/dump" component={DumpSite} />
					<Route path="/analytics" component={Analytics} />

					{/* waste users page */}
					<Route path="/users" component={Users} />

					{/* vendor-pages */}
					<Route path="/vendors" component={Pickers} />
					<Route path="/agencies" component={Agencies} />
					<Route path="/collectors" component={Collecctors} />
					{/* waste users page */}

					<Route path="/details" component={userDetails} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};
export default Router;
