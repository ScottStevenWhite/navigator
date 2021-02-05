import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderBar from './nav/HeaderBar';
import Home from './home/Home';
import CompSci from './compsci/CompSci';
import Philosophy from './philosophy/Philosophy';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const initialFormState = { name: '', description: '' };

function App() {
	return (
		<BrowserRouter>
		  <React.Fragment>
		  	<CssBaseline />
			<HeaderBar/>
	
			{/* A <Switch> looks through its children <Route>s and
				renders the first one that matches the current URL. */}
			<Switch>
			  <Route path="/philosophy">
				<Philosophy />
			  </Route>
			  <Route path="/compsci">
				<CompSci />
			  </Route>
			  <Route path="/">
				<Home />
			  </Route>
			</Switch>
			</React.Fragment>
		</BrowserRouter>
	  );
	}

export default withAuthenticator(App);
