import constants from "../constants";

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

const authReducer = (state = INITIAL_STATE, action) => {
    if(action.type === constants.GOOGLE_AUTH.SIGN_IN) {
        return {...state, isSignedIn: true, userId: action.payload};
    } else if (action.type === constants.GOOGLE_AUTH.SIGN_OUT) {
        return {...state, isSignedIn: false, userId: null};
    }
    return state;
};

export default authReducer;