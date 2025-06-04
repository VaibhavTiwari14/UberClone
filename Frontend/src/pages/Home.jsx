import React, { useState } from "react";
import { User, MapPin, Clock } from "lucide-react";
import Navbar from "../components/Navbar.jsx";

// UserHome Component
const Home = () => {
  const locationArray = [];
  const [activeTab, setActiveTab] = useState("ride");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [selectedService, setSelectedService] = useState("For me");
  const [showMap, setShowMap] = useState(false);

  const handleSearch = () => {
    if (pickupLocation && dropoffLocation) {
      setShowMap(true);
    }
  };

  const isSearchEnabled = pickupLocation && dropoffLocation;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="pt-16 flex h-screen">
        {/* Left Sidebar - Ride Booking */}
        <div
          className={`${
            showMap ? "w-80" : "w-full md:w-80"
          } bg-white shadow-lg border-r border-gray-200 flex flex-col transition-all duration-300`}
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-200 flex justify-center items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {activeTab === "ride" ? "Get a ride" : "Rent a car"}
            </h2>
          </div>

          {/* Location Inputs */}
          <div className="p-6 space-y-4">
            {/* Pickup Location */}
            <div className="relative flex items-center">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
              <input
                type="text"
                placeholder="Pickup location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            {/* Dropoff Location */}
            <div className="relative flex items-center">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <div className="w-3 h-3 bg-black rounded-sm"></div>
              </div>
              <input
                type="text"
                placeholder="Dropoff location"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <MapPin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Time Selection */}
          <div className="px-6 pb-4">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-black">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Pickup now</span>
            </button>
          </div>

          {/* Service Selection */}
          <div className="px-6 pb-6">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-gray-700" />
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="bg-transparent border-none focus:outline-none font-medium text-gray-700"
              >
                <option>For me</option>
                <option>For someone else</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="px-6 pb-6 flex justify-center">
            <button
              onClick={handleSearch}
              className={`w-full max-w-xs py-3 rounded-lg font-medium transition-all duration-200 ${
                isSearchEnabled
                  ? "bg-black text-white hover:bg-gray-800 cursor-pointer"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Search
            </button>
          </div>

          {/* Recent Locations */}
          <div className="flex-1 px-6 pb-6 overflow-y-auto">
            <h3 className="font-medium text-gray-900 mb-4">
              Recent destinations
            </h3>
            <div className="space-y-3">
              {locationArray.length > 0 ? (
                locationArray.map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <div>
                      <div className="font-medium text-gray-900">
                        {location.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {location.address}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-500">No recent locations</div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Map Area */}
        {showMap && (
          <div className="hidden md:flex flex-1 bg-gray-100 items-center justify-center">
            {/* Map will be implemented here */}
            <div className="text-gray-500">Map Area</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
