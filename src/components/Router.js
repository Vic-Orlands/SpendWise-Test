import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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

// import decode from 'jwt-decode';

// const checkAuth = () => {
// 	const token = localStorage.getItem('token');
// 	const refreshToken = localStorage.getItem('refreshToken');
// 	if (!token || !refreshToken) {
// 		return false;
// 	}

// 	try {
// 		const { exp } = decode(refreshToken);

// 		if (exp < new Date().getTime() / 1000) {
// 			return false;
// 		}
// 	} catch (error) {
// 		return false;
// 	}

// 	return true;
// };

// const Route = ({ component: Component, ...rest }) => (
// 	<Route
// 		{...rest}
// 		render={(props) => (checkAuth() ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />)}
// 	/>
// );

const Router = () => {
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
