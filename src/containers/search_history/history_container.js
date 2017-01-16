import React,{Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import LocationItem from '../../components/location/location_item';
//renders archives 
class HistoryContainer extends Component {
	locationItems(){
		this.count=0;
		return this.props.locations.map((location)=>{
			//key indexing
			this.count++;
			return <LocationItem key={this.count} location={location} />;
		});
	}
	render(){
		return <div className="row add-margin-top">
					<h4>Previous Searches</h4>
					<ul className="col-md-12">{this.locationItems()}</ul>
				</div>;
	}

}
function mapStateToProps(state){
	return {
		locations:state.archive
		
	}
}
export default connect(mapStateToProps)(HistoryContainer);