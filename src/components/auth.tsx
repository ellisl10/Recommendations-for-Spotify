// import React from "react";

async function auth() {
  const CLIENT_ID = import.meta.env.VITE_REACT_APP_CLIENT_ID;
  const CLIENT_SECRET = import.meta.env.VITE_REACT_APP_CLIENT_SECRET;

  const authParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  };
  const response = await fetch(
    "https://accounts.spotify.com/api/token",
    authParams
  );
  if (!response.ok) {
    throw new Error("Could not fetch resource");
  }
  const data = await response.json();
  return data.access_token;
}

export default auth;
