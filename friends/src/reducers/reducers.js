import { 
    GETTING_FRIENDS, 
    GET_FRIENDS_SUCCESS, 
    GET_FRIENDS_FAILURE 
} from '../actions/actionTypes';


export function friendsReducer(sliceOfState = [], action) {
    switch (action.type) {
        case GET_FRIENDS_SUCCESS:
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

        default:
            return sliceOfState;
    }    
}