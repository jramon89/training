import React, { Component } from 'react';
import PropTypes from 'prop-types';

const user  = ({name}) => {
	return(
		<li>
			{name} <a href="#">Edit</a>&nbsp;<a href="#">Delete</a>
		</li>
	);
}
user.propTypes = {
	name: PropTypes.string
}
export default user;