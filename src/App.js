import Homepage from "./views/Homepage";
import Confirm from "./views/Confirm";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { SignInButton } from "./components/SignInButton";
import { Box, Typography } from "@mui/material";
import { MsalProvider } from "@azure/msal-react";

function Pages() {
  const [desc, setDesc] = useState("");
  useEffect(() => {}, [desc]);
  return (
    <Box sx={{ background: "#a6192e" }}>
      <Box
        sx={{
          background: "white",
          m: "0 auto",
          maxWidth: "1217px",
          height: "150vh",
        }}
      >
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          SFU Course 2 Calendar
        </Typography>
        <AuthenticatedTemplate>
          <Routes>
            <Route
              exact
              path="/"
              element={<Homepage desc={desc} setDesc={setDesc} />}
            />
            <Route exact path="/confirm" element={<Confirm />} />
          </Routes>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "2em auto",
              maxWidth: "96px",
            }}
          >
            <SignInButton />
          </Box>
        </UnauthenticatedTemplate>
      </Box>
    </Box>
  );
}

export const App = ({ instance }) => {
  return (
    <MsalProvider instance={instance}>
      <Pages />
    </MsalProvider>
  );
};

export default App;
