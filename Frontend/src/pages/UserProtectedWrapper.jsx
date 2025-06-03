import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingScreen from "../components/LoadingScreen";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/user-login");
    }
  }, [token, navigate]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          setUser(response.data.user);
          isLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        navigate("/user-login");
      }
    };

    if (token) {
      fetchUserProfile();
    }
  }, [token, setUser, navigate]);

  if (loading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
