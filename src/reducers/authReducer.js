import constants from "../constants";

const INITIAL_STATE = {
    isSignedIn: null
};

const authReducer = (state = INITIAL_STATE, action) => {
    if(action.type === constants.GOOGLE_AUTH.SIGN_IN) {
        return {...state, isSignedIn: true};
    } else if (action.type === constants.GOOGLE_AUTH.SIGN_OUT) {
        return {...state, isSignedIn: false};
    }
    return state;
};

export default authReducer;