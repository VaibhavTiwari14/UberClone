import React, { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Ride");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    // You can add navigation logic here later, e.g.:
    // navigate(`/${tabName.toLowerCase()}`);
  };

  return (
    <div className="py-4 px-10 w-full bg-white shadow-sm">
      <div className="flex justify-between items-center h-full">
        {/* Left Section: Logo and Navigation */}
        <div className="flex items-center space-x-6 h-full">
          <Logo />
          {/* Navigation Tabs */}
          <div className="flex items-center h-full gap-4">
            {/* Ride Tab */}
            <div
              className={`flex items-center justify-center h-full px-4 cursor-pointer font-semibold rounded-full transition-colors duration-200 ${
                activeTab === "Ride"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              onClick={() => handleTabClick("Ride")}
            >
              Ride
            </div>
            {/* Rentals Tab */}
            <div
              className={`flex items-center justify-center h-full px-4 cursor-pointer font-semibold rounded-full transition-colors duration-200 ${
                activeTab === "Rentals"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              onClick={() => handleTabClick("Rentals")}
            >
              Rentals
            </div>
          </div>
        </div>
        {/* Right Section: Activity and Profile */}
        <div className="flex items-center space-x-4 h-full">
          <button className="px-4 py-2 text-gray-700 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200">
            Activity
          </button>
          {/* Profile Icon Placeholder */}
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
            <svg
              className="w-5 h-5 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
