import {createStore, applyMiddleware} from 'redux';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchContainer from '../containers/active_search/search_container';
import HistoryContainer from '../containers/search_history/history_container';

export default class App extends Component{
	render(){
		return(
			<div className="container-fluid add-margin-top">
				<h1 className="text-xl-center">
					Find State for Postcode in Australia
				</h1>
				<SearchContainer className="add-margin-top"/>
				<HistoryContainer/>
			</div>
		);
	}
}