import React from "react";
import "./SignIn.css";
import Navbar from "../../components/Navbar/Navbar";
import SignInBody from "../../components/SignInBody/SignInBody";
import { useAuth0 } from  "@auth0/auth0-react";
function SignIn() {
  const { loginWithRedirect } = useAuth0();


    return (
    <div>
      <Navbar showSignInButton={false} show={true} />
      {/* <SignInBody /> */}
      <div className="login_button_container">
        <button onClick={() =>   loginWithRedirect()}> Log In</button>
      </div>
    </div>
  );
}

export default SignIn;