import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const UserLogout = () => {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout();
        navigate("/user-login");
      } catch (error) {
        console.error("Logout failed:", error);
        try {
          const token = localStorage.getItem("token");
          await axios.post(
            `${import.meta.env.VITE_BASE_URL}/users/logout`,
            {},
            {
              Headers: {
                Authorization: `Bearer ${token}`,
              },
              withCredentials: true,
            }
          );
        } catch (apiError) {
          console.error("API logout failed:", apiError);
        } finally {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/user-login");
        }
      }
    };

    performLogout();
  }, [navigate, logout]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Logging out...</p>
      </div>
    </div>
  );
};

export default UserLogout;
