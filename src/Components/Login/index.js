import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  <h1>Logged IN</h1>;
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
}

export default Login;
