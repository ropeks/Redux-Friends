import React from 'react';
import { Route } from 'react-router-dom';
import RestrictedRoute from './HOCs/RestrictedRoute';
import { connect } from 'react-redux';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import './App.css';

function App() {
  // state = {
  //   errorMessage: '',
  //   requestPending: false
  // }

  return (
    <div className="App">
      {/* {
        this.props.errorMessage
        && <h2 style={{color: 'red'}}>{ this.props.errorMessage }</h2>
      }
      {
        this.props.requestPending
        && <h2>Loading...</h2>
      } */}
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
