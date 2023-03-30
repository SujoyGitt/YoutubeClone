import Firebase from "firebase/compat/app";
import auth from "../../firebase";
import {
  Loadprofile,
  Loginfail,
  LoginRequest,
  Loginsucces,
  Logout,
} from "../Reducers/Action_Types";
export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LoginRequest,
    });
    const provider = new Firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
    const res = await auth.signInWithPopup(provider);
    let accessToken = res.credential.accessToken;
    const profile = {
      name: res.additionalUserInfo.profile.name,
      photo: res.additionalUserInfo.profile.picture,
    };
    sessionStorage.setItem("ytc-access-token", accessToken);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));
    dispatch({
      type: Loginsucces,
      payload: accessToken,
    });
    dispatch({
      type: Loadprofile,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: Loginfail,
      payload: error.message,
    });
  }
};
export const logout = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: Logout,
  });
  sessionStorage.removeItem("ytc-access-token")
  sessionStorage.removeItem("ytc-user")
};
