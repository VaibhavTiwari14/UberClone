import React, { createContext, useState } from "react";
import { logout as authLogout } from "../utils/auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    try {
      await authLogout();
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
      setUser(null);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout: handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
