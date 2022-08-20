import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "@mui/material/Button";

function handleLogin(instance) {
  instance.loginPopup(loginRequest).catch((e) => {
    console.error(e);
  });
}

export const SignInButton = () => {
  const { instance } = useMsal();
  console.log(instance);
  return (
    <Button
      variant="contained"
      className="ml-auto"
      onClick={() => handleLogin(instance)}
    >
      Sign in
    </Button>
  );
};
