import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Hub from './Hub';
import Analytics from './pages/Analytics';
import Messages from './pages/Messages';
import FullMessage from './pages/FullMessage';
import DumpSite from './pages/DumpSites';
import Users from './pages/Users';
import Projects from './pages/Projects';

import Pickers from './pages/users.pages/Pickers';
import Vendors from './pages/users.pages/Vendors';
import Generators from './pages/users.pages/Generators';
import Recyclers from './pages/users.pages/Recyclers';
import Witness from './pages/users.pages/Witness';
import Agencies from './pages/users.pages/Agencies';


import userDetails from './pages/users.pages/Details';
// import Pickers from './pages/users.pages/Pickers';
// import Pickers from './pages/users.pages/Pickers';


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
					<Route path="/project" component={Projects} />

					{/* waste users page */}
					<Route path="/pickers" component={Pickers} />
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
