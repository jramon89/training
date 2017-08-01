import React, { Component } from 'react';
import PropTypes from 'prop-types';

const user  = ({name}) => {
	return(
		<li>
			User
		</li>
	);
}
user.propTypes = {
	name: PropTypes.string
}
export default user;