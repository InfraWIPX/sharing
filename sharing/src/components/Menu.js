import React from 'react'

const Menu = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			<a className="navbar-brand" href="#0">
				{props.brand}
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#0">
							หน้าแรก <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item active">
						<a className="nav-link" href="#4">
							เกี่ยวกับเรา
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Menu
