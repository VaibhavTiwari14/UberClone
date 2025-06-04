import { useState } from "react";
import { Menu, X, User, Bell, Search, Settings, Car, Home } from "lucide-react";
import Logo from "./Logo.jsx";

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: "ride", label: "Ride", icon: <Car className="w-4 h-4" /> },
    { id: "rentals", label: "Rentals", icon: <Home className="w-4 h-4" /> },
  ];

  return (
    <nav className="bg-black text-white shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            {Logo ? (
              <Logo />
            ) : (
              <div className="text-2xl font-bold text-white">TaxiGo</div>
            )}
          </div>

          {/* Desktop Navigation Tabs */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? "bg-white text-black shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="p-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
            </button>
            <button className="p-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
              <Settings className="w-5 h-5" />
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-3 ml-3 pl-3 border-l border-gray-700">
              <div className="w-9 h-9 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <User className="w-4 h-4 text-black" />
              </div>
              <div className="hidden lg:block">
                <div className="text-sm font-medium leading-tight">
                  Activity
                </div>
                <div className="text-xs text-yellow-400 leading-tight">
                  4.9 ⭐
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-md text-base font-medium flex items-center space-x-3 transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-black shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
