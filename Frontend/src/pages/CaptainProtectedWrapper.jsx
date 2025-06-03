import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainContext } from "../context/CaptainContext";

const CaptainProtectedWrapper = ({ children }) => {
  const { captain } = useContext(CaptainContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!captain) {
      navigate("/captain-login");
    }
  }, [captain, navigate]);

  if (!captain) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return children;
};

export default CaptainProtectedWrapper;
