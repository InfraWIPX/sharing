import React from 'react'

import '../statics/css/Carousel.css'

const Carousel = props => {
	const styles = {
		bgImage: {
			width: '100%',
			height: '100%',
			backgroundPosition: 'center',
			backgroundSize: 'cover'
		},
		one: {
			backgroundImage:
				'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(' +
				props.imgOne +
				')'
		},
		two: {
			backgroundImage:
				'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(' +
				props.imgTwo +
				')'
		},
		three: {
			backgroundImage:
				'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(' +
				props.imgThree +
				')'
		}
	}

	return (
		<div id={props.id}>
			<div id="indicators" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#indicators" data-slide-to="0" className="active" />
					<li data-target="#indicators" data-slide-to="1" />
					<li data-target="#indicators" data-slide-to="2" />
				</ol>
				<div className="carousel-inner" role="listbox">
					<div
						className="carousel-item active"
						style={{ ...styles.bgImage, ...styles.one }}
					>
						<div className="carousel-caption">
							<h1>{props.titleOne}</h1>
							<a href="#1" className="btn btn-outline-light">
								รายละเอียด
							</a>
						</div>
					</div>

					<div
						className="carousel-item"
						style={{ ...styles.bgImage, ...styles.two }}
					>
						<div className="carousel-caption">
							<h1>{props.titleTwo}</h1>
							<a href="#2" className="btn btn-outline-light">
								รายละเอียด
							</a>
						</div>
					</div>

					<div
						className="carousel-item"
						style={{ ...styles.bgImage, ...styles.three }}
					>
						<div className="carousel-caption">
							<h1>{props.titleThree}</h1>
							<a href="#3" className="btn btn-outline-light">
								รายละเอียด
							</a>
						</div>
					</div>
				</div>

				<a
					className="carousel-control-prev"
					href="#indicators"
					role="button"
					data-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#indicators"
					role="button"
					data-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	)
}
export default Carousel
