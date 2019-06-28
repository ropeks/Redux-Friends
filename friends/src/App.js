import React from 'react';
import { Route } from 'react-router-dom';
import RestrictedRoute from './HOCs/RestrictedRoute';
import { connect } from 'react-redux';
import FriendsList from './components/Friends';
import Login from './components/Login';
import './App.css';

function App(props) {
  // state = {
  //   errorMessage: '',
  //   requestPending: false
  // }

  return (
    <div className="App">
      {
        props.errorMessage
        && <h2 style={{color: 'red'}}>{ props.errorMessage }</h2>
      }
      {
        props.requestPending
        && <h2>Loading...</h2>
      }
      <RestrictedRoute exact path="/" component={FriendsList} />
      <Route path="/login" component={Login} />
    </div>
  );
}

function mapStateToProps(reducers) {
  return {
    requestPending: reducers.requestPending,
    errorMessage: reducers.errorMessage
  };
}

export default connect(
  mapStateToProps
)(App);
