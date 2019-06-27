import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';


import { 
    friendsReducer, 
    errorMessageReducer, 
    requestPendingReducer 
} from './reducers/reducers';

const combinedReducer = combineReducers({
    friends: friendsReducer,
    errorMessage: errorMessageReducer,
    requestPending: requestPendingReducer
})

const store = createStore(
    combinedReducer,
    {  },
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById('root')
);

