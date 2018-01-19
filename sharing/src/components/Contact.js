import React from 'react'
import ProfileCard from './ProfileCard'

import FirstIMG from '../statics/images/team/First.jpg'
import NutIMG from '../statics/images/team/Nut.jpg'
import MutaIMG from '../statics/images/team/Muta.jpg'
import JabIMG from '../statics/images/team/Jab.jpg'
import TulIMG from '../statics/images/team/Tul.jpg'
import JillIMG from '../statics/images/team/Jill.jpg'
import NewIMG from '../statics/images/team/New.jpg'
import TaeIMG from '../statics/images/team/Tae.jpg'
import BriteIMG from '../statics/images/team/Brite.jpg'

const Contact = props => {
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
						{props.title}
					</h1>

					<ul className="list-group list-group-flush">
						<li className="list-group-item bg-dark">
							<div className="d-flex flex-column flex-md-row flex-sm-row flex-xl-row flex-lg-row flex-wrap">
								<ProfileCard name="N'Jab" img={JabIMG} position="Front-end" />
								<ProfileCard name="N'Nut" img={NutIMG} position="Front-end" />
								<ProfileCard
									name="N'First"
									img={FirstIMG}
									position="Front-end"
								/>
								<ProfileCard name="N'Muta" img={MutaIMG} position="Front-end" />

								<ProfileCard name="N'Tae" img={TaeIMG} position="Design" />
								<ProfileCard name="N'New" img={NewIMG} position="Infra" />
								<ProfileCard name="N'Brite" img={BriteIMG} position="Infra" />
							</div>

							<div className="d-flex flex-column flex-md-row flex-sm-row flex-xl-row flex-lg-row flex-wrap">
								<ProfileCard name="P'Tul" img={TulIMG} position="Mentor" />
								<ProfileCard name="P'Jill" img={JillIMG} position="Mentor" />
							</div>
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

export default Contact
