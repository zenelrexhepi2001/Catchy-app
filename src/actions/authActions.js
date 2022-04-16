import { GET_SIGN_UP_WITH_GOOGLE } from "./type";

export const signUpWithGoogle = () => {
    return async (dispatch) => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=AIzaSyBumnnHlrekOSH8qsVKjzQFt7aDCL_SrGc',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const res = await response.json();
        console.log(res);
        dispatch({type: GET_SIGN_UP_WITH_GOOGLE});
    }
}