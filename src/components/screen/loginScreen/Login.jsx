import React from "react";
import "./Login.scss";
import Loginimg from "../../img/free-youtube-logo-icon-2431-thumb.png";
import { useDispatch,useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import { login } from "../../../redux/Actions/Auth_action";
import { useEffect } from "react";
export const Login = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state=>state.auth.accessToken);
  let handlelogin = () => {
    dispatch(login());
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken,navigate])
  
  return (
    <div className="login w-full h-screen relative">
      <div className="logindata  text-center w-full sm:inline-block sm:w-auto">
        <h2 className="text-3xl text-gray-600">Youtube Clone</h2>
        <img src={Loginimg} alt="loginimg" className="w-20 m-auto" />
        <button
          className="p-3 bg-grey text-sm rounded-lg text-gray-600"
          onClick={handlelogin}
        >
          Login With Google
        </button>
        <p className="my-2 text-gray-500">
          A Youtube clone project made using Youtube-api
        </p>
      </div>
    </div>
  );
};
