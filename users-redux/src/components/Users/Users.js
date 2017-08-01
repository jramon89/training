import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

const users = ({users}) => {
	return(
		<ul>
			<User name='JR'/>
		</ul>
	);
}

users.propTypes = {
	users: PropTypes.array
}

export default users;