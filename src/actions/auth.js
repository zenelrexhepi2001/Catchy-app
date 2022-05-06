import { GET_CREATE_ACCOUNT } from "./type";

export const signUp =(name,email,password)=>{
    return async dispatch => {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC0K8Ngj3EUXOikWiTk04EN9p-XlGjLWSk',
       {
           method: 'POST',
           headers: {
               'Content-type': 'application/json',
           },
           body: JSON.stringify({
               name: name,
               email: email,
               password: password,
           })
         }
      );
      const resData = await response.json();
      console.log(resData);

      dispatch({type: GET_CREATE_ACCOUNT,token: resData.idToken,userId: resData.localId  })
    }
}