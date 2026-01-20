import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Screen } from "./components/screen/Screen";
import { useEffect, useState } from "react";
import { Login } from "./components/screen/loginScreen/Login";
import {  Route, Routes } from "react-router-dom";
import {useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import { WatchScreen } from "./components/screen/WatchScreen/WatchScreen";
import { Searchscreen } from "./components/screen/Searchscreen";
import { Subscription } from "./components/screen/Subscriptions/Subscription";
import { ChannelScreen } from "./components/screen/ChannelScreen/ChannelScreen";
const Layout = ({ children }) => {
  let [hambargar, sethambarger] = useState(false);
  let hambargermenu = () => {
    if (hambargar === false) {
      sethambarger(true);
    } else {
      sethambarger(false);
    }
  };
  return (
    <>
      <Header hambargermenu={hambargermenu} />
      <div className="homecontainer flex justify-end w-full">
        <Sidebar hambargermenu={hambargermenu} hambargar={hambargar} />
        {children}
      </div>
    </>
  );
};
function App() {

let {accessToken,loading} = useSelector(state => state.auth);
let navigate = useNavigate();

useEffect(()=>{
if (!accessToken && !loading) {
  navigate("/auth")
}
},[accessToken,loading,navigate])
  return (
 <Routes>
        <Route
          path="/"
          exact
          element={
            <Layout><Screen /></Layout>
          }
        />
        <Route path="/auth" element={<Login />} />
        <Route
          path="/search/:query"
          element={
            <Layout><Searchscreen/></Layout>
          }
        />
          <Route
          path="/watch/:id"
          element={
            <Layout><WatchScreen/></Layout>
          }
        /> 
          <Route
          path="/feed/subscriptions"
          element={
            <Layout><Subscription/></Layout>
          }
        />
          <Route
          path="/channel/:channelId"
          element={
            <Layout><ChannelScreen/></Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout><Screen /></Layout>
          }
        />
      </Routes>
  
  );
}

export default App;
