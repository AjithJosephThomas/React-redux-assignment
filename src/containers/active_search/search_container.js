import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Lookup from '../../components/lookup/lookup';
import {searchZipcode} from '../../actions/index.js';
//container for search and result display components
class SearchContainer extends Component {
	constructor(props){
		super(props);
		this.onLookup=this.onLookup.bind(this);
	}
	render(){
		return (
				<div className="row">
					<Lookup lookupCallback={(term)=>this.onLookup(term)}/>
					<div className="text-xl-center col-md-12col-lg-12 col-xl-12 add-margin-top">
						<h3>{this.props.currState}</h3>
					</div>
				</div>
			);
	}
	onLookup(term){
		//dispatches search keyword action
		this.props.searchZipcode(term);
	}
}
function mapStateToProps(state){
	return {
		currState:state.current.state
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({searchZipcode:searchZipcode},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchContainer);