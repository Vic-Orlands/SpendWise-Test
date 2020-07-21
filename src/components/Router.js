import React from 'react';
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
import vendorDetails from './pages/users.pages/VendorDetails';

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

const Router = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" component={Login} exact={true} />

					<PrivateRoute path="/hub" component={Hub} />
					<PrivateRoute path="/home" component={Home} />
					<PrivateRoute path="/message" component={FullMessage} />
					<PrivateRoute path="/dump" component={DumpSite} />
					<PrivateRoute path="/analytics" component={Analytics} />

					{/* waste users page */}
					<PrivateRoute path="/users" component={Users} />

					{/* vendor-pages */}
					<PrivateRoute path="/vendors" component={Pickers} />
					<PrivateRoute path="/agencies" component={Agencies} />
					<PrivateRoute path="/collectors" component={Collecctors} />
					{/* waste users page */}

					<PrivateRoute path="/details" component={userDetails} />
					<PrivateRoute path="/ventails" component={vendorDetails} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};
export default Router;
