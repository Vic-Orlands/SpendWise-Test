import React from 'react';
import './styles.css';
import { AiOutlineClose } from 'react-icons/ai';

export default (props) => {
	// setting props onclose to false to close the modal
	const onclose = (e) => {
		props.onClose && props.onClose(e);
	};

	// returns nothing if props.open is false
	if (!props.open) {
		return null;
	}
	return (
		<section className="archive-budget-container">
			<div className="archive-content">
				<AiOutlineClose onClick={onclose} id="closeFont" />

				<h1>Budget History</h1>

				{props.archiveList.length > 1 ? (
					<div>
						{props.archiveList.map((archive) => (
							<div
								className="archiveLists"
								style={{
									backgroundColor: archive.category === 'General' ? '#2e41c0' : '#0089b4',
									color: 'white'
								}}
								key={archive.id}
							>
								<div>
									<h3>{archive.category}</h3>
									<h2>NGN{archive.budget_amount}</h2>
								</div>

								<div>
									<h5>{new Date(archive.date_created).toDateString()}</h5>
									<h6>
										{archive.performance}
										<span>{archive.status}</span>
									</h6>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="noArchivedBudget">
						<img src={require('../../assets/info.png')} alt="img" />
						<h3>No archived budget for the month</h3>
					</div>
				)}
			</div>
		</section>
	);
};
