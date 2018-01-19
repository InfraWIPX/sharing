import React from 'react'

function ProfileCard(props) {
	return (
		<div class="p-2">
			<img
				src={props.img}
				alt={props.name}
				className="img-thumbnail rounded-circle img-fluid w-75 mx-auto m-4 d-block"
			/>
			<h4 className="text-center text-white m-0">{props.name}</h4>
			<h5 className="text-center text-white m-0">{props.position}</h5>
		</div>
	)
}

export default ProfileCard
