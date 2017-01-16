import {SEARCH_ZIPCODE} from '../actions/index.js';

//initial state with zip as null and state value as zero, collection of previous search is empty array
const initState={archive:[],current:{zip:null,state:''}};


export default function(state=initState,action){
	switch(action.type){
		//when the response of key word search is available.
		case SEARCH_ZIPCODE:
			switch(action.payload.status){
				case 302:
				case 200:
					//on result generate location object.
					const loc={
								zip:action.payload.data['post code'],
								state:action.payload.data.places[0].state
							};
					
					if(state.current.zip!=null){
						//move current location to archive list and set new location as current
						return {archive:state.archive.concat([state.current]),current:loc};
					}else
					{
						//since on search was done prior archive is empty
						return {archive:[],current:loc};
					}
				break;
				case 404:
					console.log("Zipcode not found");
				break;
				default:
					alert("An unknown error has occurred!")
					console.log(action.payload.status);
					
			}
		default: 
		 return state;
	}
}
