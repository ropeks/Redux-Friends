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
} from '../actions/actionTypes';


export function friendsReducer(sliceOfState = [], action) {
    switch (action.type) {
        case GET_FRIENDS_SUCCESS:
            return action.payload;

        case LOGIN_SUCCESS:
            return action.payload;

        case ADD_FRIEND_SUCCESS:
            return action.payload;
            
        default:
            return sliceOfState;
    }
}

export function errorMessageReducer(sliceOfState = '', action) {
    switch (action.type) {
        case GET_FRIENDS_FAILURE:
            return action.payload;
        case GET_FRIENDS_SUCCESS:
            return sliceOfState = '';
        
        case LOGIN_FAILURE:
            return action.payload;
        case LOGIN_SUCCESS:
            return sliceOfState = '';

        case ADD_FRIEND_FAILURE:
            return action.payload;
        case ADD_FRIEND_SUCCESS:
            return sliceOfState = '';

        default:
            return sliceOfState;
    }    
}

export function requestPendingReducer(sliceOfState = false, action) {
    switch (action.type) {
        case GETTING_FRIENDS:
            return sliceOfState = true;
        case GET_FRIENDS_FAILURE:
                return sliceOfState = false;
        case GET_FRIENDS_SUCCESS:
                return sliceOfState = false;

        case LOGGING_IN:
            return sliceOfState = true;
        case LOGIN_FAILURE:
            return sliceOfState = false;
        case LOGIN_SUCCESS:
            return sliceOfState = false;

        case ADDING_FRIEND:
            return sliceOfState = true;
        case ADD_FRIEND_FAILURE:
            return sliceOfState = false;
        case ADD_FRIEND_SUCCESS:
            return sliceOfState = false;

        default:
            return sliceOfState;
    }    
}