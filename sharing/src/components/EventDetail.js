import React from 'react'

const EventDetail = props => {
	const styles = {
		title: {
			background: 'red',
			borderRadius: '1em',
			width: 'auto',
			display: 'block',
			padding: '0.2em'
		},
		marinLayout: {
			marginTop: '5em',
			marginBottom: '5em'
		},
		paddingLayout: {
			paddingTop: '5em'
		}
	}

	return (
		<div
			className="container"
			id={props.id}
			style={(styles.marinLayout, styles.paddingLayout)}
		>
			<div className="row">
				<div className="col-md-8 mx-auto">
					<h1 className="text-white text-center" style={styles.title}>
						{props.eventName}
					</h1>

					<ul className="list-group list-group-flush">
						<li className="list-group-item bg-dark">
							<h4 className="text-white">รายละเอียด</h4>
							<p className="text-white">{props.eventDetail}</p>
						</li>

						<li className="list-group-item bg-dark">
							<h4 className="text-white">สถานที่</h4>
							<p className="text-white">{props.eventPlace}</p>
						</li>

						<li className="list-group-item bg-dark">
							<h4 className="text-white">เวลา</h4>
							<p className="text-white">{props.eventTime}</p>
						</li>

						<li className="list-group-item bg-dark text-center">
							<a href="#0" className="btn btn-outline-light btn-lg">
								Up
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default EventDetail
