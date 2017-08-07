import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions/actionsCreators';
import Link from '../../components/TodoList/Link';

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.filter
	}
};

const mapDispatchToProps = ( dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter));
		}
	}
};

const FilterLink = connect(
	mapStateToProps, 
	mapDispatchToProps
)(Link);

export default FilterLink;