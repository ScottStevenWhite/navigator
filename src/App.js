import React, { useState, useEffect } from 'react';
import Home from './home/Home';
import CompSci from './compsci/CompSci';
import Philosophy from './philosophy/Philosophy';
import { API, Storage, Auth } from 'aws-amplify';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import Button from '@material-ui/core/Button';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const initialFormState = { name: '', description: '' };

function App() {
	return (
		<BrowserRouter>
		  <div>
			<nav>
			  <ul>
				<li>
				  <Link to="/">Home</Link>
				</li>
				<li>
				  <Link to="/compsci">Computer Science</Link>
				</li>
				<li>
				  <Link to="/philosophy">Philosophy</Link>
				</li>
			  </ul>
			</nav>
	
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
		  </div>
		</BrowserRouter>
	  );
	}

export default withAuthenticator(App);
