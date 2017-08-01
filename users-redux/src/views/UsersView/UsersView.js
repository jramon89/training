import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Users from '../../components/Users/Users';

const usersView = ({data}) => {
	return (
		<Users users={data}/>
	);
};

const mapStateToProps = function(state) {
	console.log('state', state);
	return {
		data: state
	}
};

const mapDispatchToProps = function(dispatch) {
	return {
		eventUser: function(){

		}
	}
};

const usersConnect = connect(
	mapStateToProps,
	mapDispatchToProps
)(usersView); 

export default usersConnect;
