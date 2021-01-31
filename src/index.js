/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';


// ACTION INCREMENT DECREMENT
const increment = () => {
	return {
		type: 'INCREMENT'
	}
}

const decrement = () => {
	return {
		type: 'DECREMENT'
	}
}

// REDUCER -> HOW ACTIONS TRANSFORM STATE
const counter = (state = 0, action) => {
	switch(action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
	}
}

// STORE -> GLOBALIZED STATE
let store = createStore(counter);

//DISPLAY it to the console
store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
