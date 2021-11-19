import constants from "../constants";

export const SignIn = () => {
    return {
        type: constants.GOOGLE_AUTH.SIGN_IN
    }
}

export const SignOut = () => {
    return {
        type: constants.GOOGLE_AUTH.SIGN_OUT
    }
}