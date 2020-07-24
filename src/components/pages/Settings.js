import React, { useState, useEffect } from 'react';
import Navigation from '../core.sections/Navigation';
import Sidemenu from '../core.sections/Sidemenu';
import Footer from '../core.sections/Footer';
import '../../styles/Settings.css';

const Settings = () => {
	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

	return (
		<div>
			<Navigation />
			<Sidemenu />

			{loading ? (
				<div className="gifLoad">
					<img src={require('../../assets/load.gif')} alt="Loading..." />
				</div>
			) : (
				<section className="settingsBody">
					<div>
						<h1>Settings</h1>
					</div>

					<div className="settingsFieldset">
						<fieldset>
							<label>
								Admin Username:
								<input type="text" placeholder="new username" />
							</label>

							<label>
								Admin Password:
								<input type="text" placeholder="new password" className="" />
							</label>

							<label>
                                    Are you sure you want to make this changes?
								<div className="toggle-switch">
									<input
										type="checkbox"
										className="toggle-switch-checkbox"
										name="toggleSwitch"
										id="toggleSwitch"
									/>
									<label className="toggle-switch-label" htmlFor="toggleSwitch">
										<span className="toggle-switch-inner" />
										<span className="toggle-switch-switch" />
									</label>
								</div>
							</label>

                            <button className="btn btn-success">Save Changes</button>
						</fieldset>
					</div>
				</section>
			)}

			<Footer />
		</div>
	);
};

export default Settings;
