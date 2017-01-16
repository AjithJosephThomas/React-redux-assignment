import _ from 'lodash';
import React,{Component} from 'react';
export default class Lookup extends Component{
	constructor(props){
		super(props);		
	}
	componentDidMount(){
		//trigger text change after a delay of 300 ms
		this.delayedSearchChange=_.debounce((term)=>{this.props.lookupCallback(term)},300);
	}

	render(){	
		return(
			<input className="form-control" onChange={(event)=>this.delayedSearchChange(event.target.value)}/>
		);
	}
}

