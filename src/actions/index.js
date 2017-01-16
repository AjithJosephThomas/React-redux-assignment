import axios from 'axios';

export const SEARCH_ZIPCODE = 'SEARCH_ZIPCODE';
/*
Searches a zipcode for Australia in zippopotamus 
@method searchKeyword
@param {String} term
$return {object} response
*/
export function searchZipcode(code){
	const ZIPO_URL='http://api.zippopotam.us/au/';
	if(code.length){
		return {
			type:'SEARCH_ZIPCODE',
			payload:axios.get(ZIPO_URL+code) .then(function (response) {
				console.log(response);
				return response;
			  })
			  .catch(function (response) {
				console.log(response);
				return response;
			  })
		};
	}else{
		return {type:''}
	}	
}