import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css"; // Import CSS file
import DefaultLayout from "./Layout/DefaultLayout";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import GlobalStateContext from "./Contexts/GlobalStateContext";
import Cookies from "js-cookie";
import NoInternetScreen from "./Pages/NoInternetScreen";
import WelcomeToOptifii from "./Pages/Onboarding/WelcomeToOptifii";
import LoginPhoneNumber from "./Pages/Onboarding/LoginPhoneNumber";
import LoginEmailAddress from "./Pages/Onboarding/LoginEmailAddress";
import LoginEmailOtp from "./Pages/Onboarding/LoginOtp";
import LoginEkyc from "./Pages/Onboarding/LoginEkyc";
import MinimumKyc from "./Pages/Onboarding/MinimumKyc";
import FullKyc from "./Pages/Onboarding/FullKyc";
import FullKycLocation from "./Pages/Onboarding/FullKycLocation";
import FullKycQandA from "./Pages/Onboarding/FullKycQandA";
import FullKycFaceVerification from "./Pages/Onboarding/FullKycFaceVerification";
import FullKycAadharVerification from "./Pages/Onboarding/FullKycAadharVerification";
import FullKycPanVerification from "./Pages/Onboarding/FullKycPanVerification";
import RegisterOtp from "./Pages/Onboarding/RegisterOtp";

const App = () => {
  // const { isAuthenticate } = useSelector((state) => state?.auth);

  const { isAuthenticate } = useContext(GlobalStateContext);
  const isAuthenticatedInCookie = Cookies.get("isAuthenticated");
  
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  // const token = localStorage.getItem('accessToken')
  // console.log(token);
  

  // const PrivateRoute = ({ children }) => {
  //   if (!isAuthenticate && isAuthenticatedInCookie !== "true") {
  //     return <Navigate to="/login" replace />;
  //   }
  //   return children;
  // };

  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/welcome-screen" element={<WelcomeToOptifii />} />
        <Route path="/login-phone-number" element={<LoginPhoneNumber />} />
        <Route path="/" element={<LoginEmailAddress />} />
        <Route path="/login-otp" element={<LoginEmailOtp />} />
        <Route path="/register-otp" element={<RegisterOtp />} />
        <Route path="/ekyc" element={<LoginEkyc />} />
        <Route path="/minimum-kyc" element={<MinimumKyc />} />
        <Route path="/maximum-kyc" element={<FullKyc />} />
        <Route path="/full-kyc-location" element={<FullKycLocation />} />
        <Route path="/full-kyc-q&a" element={<FullKycQandA />} />
        <Route path="/full-kyc-face-verification" element={<FullKycFaceVerification />} />
        <Route path="/full-kyc-aadhar-verification" element={<FullKycAadharVerification />} />
        <Route path="/full-kyc-pan-verification" element={<FullKycPanVerification />} />


        <Route
          path="/*"
          element={
            // isOnline ? (
              isAuthenticate || isAuthenticatedInCookie  === "true" ? (
                <DefaultLayout isOnline={isOnline} />
              ) : (
                <LoginEmailAddress />
              )
            // ) : (
            //   <NoInternetScreen />
            // )
          }
        />




        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
