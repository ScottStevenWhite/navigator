import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeaderBar from './nav/HeaderBar';
import Home from './home/Home';
import CompSci from './compsci/CompSci';
import Philosophy from './philosophy/Philosophy';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme, { PALETTE } from './theme';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const initialFormState = { name: '', description: '' };

const useStyles = makeStyles(() => ({
	'@global': {
		a: {
			color: PALETTE.primary.main,
			textDecoration: 'none',
			'&:not(:empty)': {
				boxShadow: 'none'
			}
		},
		':focus': {
			boxShadow: `0 0 3px 1px ${PALETTE.primary.light}`
		}
	}
}));

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<BrowserRouter>
			<React.Fragment>
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
		</ThemeProvider>
	  );
	}

export default withAuthenticator(App);
