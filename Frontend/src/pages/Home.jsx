import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4 p-6 bg-white shadow-md">
          <h2 className="text-xl font-bold mb-6 text-gray-800">Get a ride</h2>
          <div className="space-y-4">
            {/* Pickup Location */}
            <div>
              <label
                htmlFor="pickup"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pickup location
              </label>
              <input
                type="text"
                id="pickup"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Enter pickup location"
              />
            </div>
            {/* Dropoff Location */}
            <div>
              <label
                htmlFor="dropoff"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Dropoff location
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="dropoff"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Enter dropoff location"
                />
                <button className="ml-2 p-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/* Pickup Time */}
            <div>
              <label
                htmlFor="pickup-time"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Pickup time
              </label>
              <select
                id="pickup-time"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option>Pickup now</option>
                <option>Schedule for later</option>
              </select>
            </div>
            {/* For Me/Someone Else */}
            <div>
              <label
                htmlFor="passenger"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                For
              </label>
              <select
                id="passenger"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option>For me</option>
                <option>For someone else</option>
              </select>
            </div>
          </div>
          {/* Search Button */}
          <button className="mt-6 w-full px-4 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
            Search
          </button>
        </div>
        {/* Right Map Area */}
        <div className="flex-1 bg-gray-200">
          {/* Map Placeholder */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Map Area
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
