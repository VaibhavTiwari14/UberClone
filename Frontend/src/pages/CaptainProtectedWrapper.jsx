import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainContext } from "../context/CaptainContext";
import axios from "axios";
import LoadingScreen from "../components/LoadingScreen";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainContext);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token, navigate]);

  useEffect(() => {
    const fetchCaptainProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          setCaptain(response.data.captain);
          isLoading(false);
        }
      } catch (error) {
        console.error("Error fetching captain profile:", error);
        navigate("/captain-login");
      }
    };

    if (token) {
      fetchCaptainProfile();
    }
  }, [token, setCaptain, navigate]);

  if (loading) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
