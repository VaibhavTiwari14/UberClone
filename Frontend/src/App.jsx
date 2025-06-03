import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { CaptainProvider } from "./context/CaptainContext";
import AppRoutes from "./routes";

const App = () => {
  return (
    <UserProvider>
      <CaptainProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CaptainProvider>
    </UserProvider>
  );
};

export default App;
