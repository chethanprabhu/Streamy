import constants from "../constants";

export const SignIn = (userId) => {
    return {
        type: constants.GOOGLE_AUTH.SIGN_IN,
        payload: userId
    }
}

export const SignOut = () => {
    return {
        type: constants.GOOGLE_AUTH.SIGN_OUT
    }
}