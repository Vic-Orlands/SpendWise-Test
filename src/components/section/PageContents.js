import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Metrics from '../pages/Metrics';
import Messages from '../pages/Messages';
// import Notifications from '../pages/Notifications';

const PageContents = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/home" component={Home} exact={true} />
					<Route path="/page/metrics" component={Metrics} />
					<Route path="/page/messages" component={Messages} />
					{/* <Route path="/notifications" component={Notifications} /> */}
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default PageContents;
