export const msalConfig = {
  auth: {
    clientId: "43a12982-207c-4684-ab76-c425b7c3778a",
    authority: "https://login.microsoftonline.com/common",
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  // scopes: ["User.Read"],
  scopes: ["Calendars.ReadWrite", "User.Read"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me/calendar/events",
};
