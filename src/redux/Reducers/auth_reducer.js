import {
  LoginRequest,
  Loginsucces,
  Loginfail,
  Loadprofile,
  Logout,
} from "./Action_Types";

let initialstate = {
  accessToken: sessionStorage.getItem('ytc-access-token')?sessionStorage.getItem('ytc-access-token'):null,
  user: sessionStorage.getItem("ytc-user")?sessionStorage.getItem("ytc-user"):null,
  loading: false,
};
export const authReducer = (prevstate = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case LoginRequest:
      return { ...prevstate, loading: true };
    case Loginsucces:
      return { ...prevstate, accessToken: payload, loading: false };
    case Loginfail:
      return {
        ...prevstate,
        accessToken: payload,
        loading: false,
        error: payload,
      };

    case Loadprofile:
      return {
        ...prevstate,
        accessToken: payload,
        user:payload,
        loading: false,
        error: payload,
      };
case Logout:return{
  ...prevstate,
  accessToken:null,
  user:null
}
    default:
      return prevstate;
  }
};
