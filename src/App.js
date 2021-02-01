import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Is Auth Working?</h2>
        </div>
        <p className="App-intro">
          Lets go!
        </p>
		<AmplifySignOut />
      </div>
    );
  }
}

export default withAuthenticator(App);
