import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Hub from './Hub';
import Analytics from './pages/Analytics';
import Messages from './pages/Messages';
import FullMessage from './pages/FullMessage';
import DumpSite from './pages/DumpSites';
import Users from './pages/Users';

// import PrivateRoute from './Routes/PrivateRoute';
// import PublicRoute from './Routes/PublicRoute';
 

const Router = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" component={Login} exact={true} />
					<Route path="/hub" component={Hub} />
					<Route path="/home" component={Analytics} />
					<Route path="/message" component={Messages} />
					<Route path="/readmsg" component={FullMessage} />
					<Route path="/dump" component={DumpSite} />
					<Route path="/user" component={Users} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};
export default Router;
