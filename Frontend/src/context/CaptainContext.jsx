import React, { createContext, useState } from "react";
import axios from "axios";

export const CaptainContext = createContext();

export const CaptainProvider = ({ children }) => {
  const [captain, setCaptain] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        { email, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { token, captain: captainData } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("captain", JSON.stringify(captainData));
      setCaptain(captainData);
      return captainData;
    } catch (error) {
      throw error.response?.data || { message: "Login failed" };
    }
  };

  const register = async (captainData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        captainData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { token, captain: newCaptain } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("captain", JSON.stringify(newCaptain));
      setCaptain(newCaptain);
      return newCaptain;
    } catch (error) {
      throw error.response?.data || { message: "Registration failed" };
    }
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("captain");
      setCaptain(null);
    }
  };

  const updateLocation = async (latitude, longitude) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/captains/location`,
        { latitude, longitude },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setCaptain((prev) => ({
        ...prev,
        location: { latitude, longitude },
      }));
    } catch (error) {
      console.error("Location update failed:", error);
      throw error;
    }
  };

  const updateStatus = async (status) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/captains/status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setCaptain((prev) => ({
        ...prev,
        status,
      }));
    } catch (error) {
      console.error("Status update failed:", error);
      throw error;
    }
  };

  const value = {
    captain,
    setCaptain,
    login,
    register,
    logout: handleLogout,
    updateLocation,
    updateStatus,
  };

  return (
    <CaptainContext.Provider value={value}>{children}</CaptainContext.Provider>
  );
};
