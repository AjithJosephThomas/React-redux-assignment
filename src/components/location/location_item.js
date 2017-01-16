
import React,{Component} from 'react';

export default class LocationItem extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
		<div className="list-group-item row">
			<div className=" col-md-6">{this.props.location.zip}</div><div className="col-md-6">{this.props.location.state}</div>
		</div>);
	}
}
