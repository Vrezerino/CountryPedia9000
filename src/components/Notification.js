import React from 'react'

const Notification = ({ error }) => {
	return(
		<div>
			{error?.message}
		</div>
	)
}

export default Notification