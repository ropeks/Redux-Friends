import axios from 'axios';
import { 
    GETTING_FRIENDS, 
    GET_FRIENDS_SUCCESS, 
    GET_FRIENDS_FAILURE,
    LOGGING_IN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    ADDING_FRIEND,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILURE
} from './actionTypes';

export function getFriends()  {
    return (dispatch) => {
        dispatch({ type: GETTING_FRIENDS })

        const token = localStorage.getItem('token');
        const axiosConfig = token ? { headers: { 'Authorization': token }}: null;

        axios.get('http://localhost:5000/api/friends', axiosConfig)
            .then(res => {
                dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: GET_FRIENDS_FAILURE, payload: err.response.data.error })
            })
    }
}

export function login(credentials) {
    return (dispatch) => {
      dispatch({ type: LOGGING_IN });
  
      return axios.post('http://localhost:5000/api/login', credentials)
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: LOGIN_FAILURE, payload: err.response.data.error });
        });
    }
}

export function addFriend(friend) {
    return (dispatch) => {
        dispatch({ type: ADDING_FRIEND });

        const token = localStorage.getItem('token');
        const axiosConfig = token ? { headers: { 'Authorization': token }}: null;
        
        axios.post('http://localhost:5000/api/friends', axiosConfig, friend)
            .then(res => {
                dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: ADD_FRIEND_FAILURE, payload: err.response.data.error });
            })
    }
}