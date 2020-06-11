import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Hub from './Hub';
import Home from './pages/Home';
import DumpSite from './pages/DumpSites';
import Analytics from './pages/Analytics';

import Users from './pages/users.pages/Pickers';
import Vendors from './pages/users.pages/Vendors';
import Generators from './pages/users.pages/Generators';
import Recyclers from './pages/users.pages/Recyclers';
import Witness from './pages/users.pages/Witness';
import Agencies from './pages/users.pages/Agencies';


import FullMessage from './pages/FullMessage';
import userDetails from './pages/users.pages/Details';

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
					<Route path="/vendors" component={Vendors} />
					<Route path="/generators" component={Generators} />
					<Route path="/recyclers" component={Recyclers} />
					<Route path="/witness" component={Witness} />
					<Route path="/agencies" component={Agencies} />
					{/* waste users page */}

					<Route path="/details" component={userDetails} />

				</Switch>
			</div>
		</BrowserRouter>
	);
};
export default Router;
