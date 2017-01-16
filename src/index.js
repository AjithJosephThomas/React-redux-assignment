import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

import ReduxPromise from 'redux-promise';

//linking redux promise to store
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

//rendering to dom
ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App/>
	</Provider>
	, document.querySelector('.container')
  );