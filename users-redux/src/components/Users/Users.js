import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

const users = ({users}) => {
	return(
		<ul>
			{
				users.map((v, i) => {
					console.log('>>>>>', v);
					return(
						<User
							key={i} 
							name={v.name}/>
					);
				})
				
			}
		</ul>
	);
}

users.propTypes = {
	users: PropTypes.array
}

export default users;