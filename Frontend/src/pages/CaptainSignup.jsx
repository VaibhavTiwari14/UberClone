import React, { useState, useContext } from "react";
import CaptainLogo from "../components/CaptainLogo";
import { Link, useNavigate } from "react-router-dom";
import { CaptainContext } from "../context/CaptainContext";

const CaptainSignup = () => {
  const [formData, setFormData] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
    vehicle: {
      color: "",
      plate: "",
      capacity: "",
      vehicleType: "",
    },
    location: {
      latitude: 0,
      longitude: 0,
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { register } = useContext(CaptainContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const passChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignup = async () => {
    if (
      formData.fullname.firstname === "" ||
      formData.fullname.lastname === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.vehicle.color === "" ||
      formData.vehicle.plate === "" ||
      formData.vehicle.capacity === "" ||
      formData.vehicle.vehicleType === "" ||
      confirmPassword === ""
    ) {
      setError("Please fill in all fields");
      return;
    }
    if (confirmPassword !== formData.password) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await register(formData);
      navigate("/captain-dashboard");
    } catch (error) {
      setError(error.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat relative"
      style={{
        backgroundImage: `url('/loginImg.jpg')`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left side - Signup Form */}
        <div className="w-full lg:w-3/4 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl">
            {/* Logo */}
            <div className="lg:mb-6">
              <CaptainLogo />
            </div>

            {/* Signup Form */}
            <div className="flex items-center justify-center w-full h-fit">
              <div className="space-y-4 bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-yellow-400/20 w-full">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-1">
                    Join Our Driver Network!
                  </h1>
                  <p className="text-sm text-gray-200">
                    Already have an account?{" "}
                    <Link
                      to={loading ? "#" : "/captain-login"}
                      className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                    >
                      Sign In
                    </Link>
                  </p>
                  {error && (
                    <p className="mt-2 text-sm text-red-400 bg-red-900/30 p-2 rounded-lg">
                      {error}
                    </p>
                  )}
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-xs font-semibold text-yellow-300 mb-1"
                    >
                      First Name
                    </label>
                    <div className="relative">
                      <input
                        id="firstname"
                        name="fullname.firstname"
                        type="text"
                        value={formData.fullname.firstname}
                        onChange={handleChange}
                        className="w-full px-3 pl-10 py-2 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/50 text-white placeholder-yellow-200/70 placeholder:text-xs placeholder:font-medium text-sm"
                        placeholder="First-Name"
                        minLength={3}
                        maxLength={30}
                        required
                      />
                      <svg
                        className="w-4 h-4 text-yellow-400 absolute left-3 top-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-xs font-semibold text-yellow-300 mb-1"
                    >
                      Last Name
                    </label>
                    <div className="relative">
                      <input
                        id="lastname"
                        name="fullname.lastname"
                        type="text"
                        value={formData.fullname.lastname}
                        onChange={handleChange}
                        className="w-full px-3 pl-10 py-2 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/50 text-white placeholder-yellow-200/70 placeholder:text-xs placeholder:font-medium text-sm"
                        placeholder="Last-Name"
                        minLength={3}
                        maxLength={30}
                        required
                      />
                      <svg
                        className="w-4 h-4 text-yellow-400 absolute left-3 top-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-yellow-300 mb-1"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 pl-10 py-2 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/50 text-white placeholder-yellow-200/70 placeholder:text-xs placeholder:font-medium text-sm"
                      placeholder="your.email@example.com"
                      minLength={5}
                      maxLength={30}
                      required
                    />
                    <svg
                      className="w-4 h-4 text-yellow-400 absolute left-3 top-2.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                </div>

                {/* Vehicle Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="vehicleColor"
                      className="block text-xs font-semibold text-yellow-300 mb-1"
                    >
                      Vehicle Color
                    </label>
                    <div className="relative">
                      <input
                        id="vehicleColor"
                        name="vehicle.color"
                        type="text"
                        value={formData.vehicle.color}
                        onChange={handleChange}
                        className="w-full px-3 pl-10 py-2 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/50 text-white placeholder-yellow-200/70 placeholder:text-xs placeholder:font-medium text-sm"
                        placeholder="e.g., Black"
                        minLength={3}
                        required
                      />
                      <svg
                        className="w-4 h-4 text-yellow-400 absolute left-3 top-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="vehiclePlate"
                      className="block text-xs font-semibold text-yellow-300 mb-1"
                    >
                      Vehicle Plate Number
                    </label>
                    <div className="relative">
                      <input
                        id="vehiclePlate"
                        name="vehicle.plate"
                        type="text"
                        value={formData.vehicle.plate}
                        onChange={handleChange}
                        className="w-full px-3 pl-10 py-2 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/50 text-white placeholder-yellow-200/70 placeholder:text-xs placeholder:font-medium text-sm"
                        placeholder="e.g., MH01AB1234"
                        minLength={3}
                        required
                      />
                      <svg
                        className="w-4 h-4 text-yellow-400 absolute left-3 top-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="vehicleCapacity"
                      className="block text-xs font-semibold text-yellow-300 mb-1"
                    >
                      Vehicle Capacity
                    </label>
                    <div className="relative">
                      <input
                        id="vehicleCapacity"
                        name="vehicle.capacity"
                        type="number"
                        value={formData.vehicle.capacity}
                        onChange={handleChange}
                        className="w-full px-3 pl-10 py-2 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/50 text-white placeholder-yellow-200/70 placeholder:text-xs placeholder:font-medium text-sm"
                        placeholder="Number of seats"
                        min={1}
                        required
                      />
                      <svg
                        className="w-4 h-4 text-yellow-400 absolute left-3 top-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="vehicleType"
                      className="block text-xs font-semibold text-yellow-300 mb-1"
                    >
                      Vehicle Type
                    </label>
                    <div className="relative">
                      <select
                        id="vehicleType"
                        name="vehicle.vehicleType"
                        value={formData.vehicle.vehicleType}
                        onChange={handleChange}
                        className="w-full px-3 pl-10 py-2 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/50 text-white placeholder-yellow-200/70 placeholder:text-xs placeholder:font-medium text-sm appearance-none cursor-pointer"
                        required
                      >
                        <option value="" className="bg-black text-white">
                          Select Vehicle Type
                        </option>
                        <option value="car" className="bg-black text-white">
                          Car
                        </option>
                        <option
                          value="motorcycle"
                          className="bg-black text-white"
                        >
                          Motorcycle
                        </option>
                        <option value="auto" className="bg-black text-white">
                          Auto
                        </option>
                      </select>
                      <div className="absolute right-3 top-2.5 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-yellow-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Password Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-xs font-semibold text-yellow-300 mb-1"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-3 pl-10 py-2 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/50 text-white placeholder-yellow-200/70 placeholder:text-xs placeholder:font-medium text-sm"
                        placeholder="Create a password"
                        required
                      />
                      <svg
                        className="w-4 h-4 text-yellow-400 absolute left-3 top-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-xs font-semibold text-yellow-300 mb-1"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={passChange}
                        className="w-full px-3 pl-10 py-2 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/50 text-white placeholder-yellow-200/70 placeholder:text-xs placeholder:font-medium text-sm"
                        placeholder="Confirm your password"
                        required
                      />
                      <svg
                        className="w-4 h-4 text-yellow-400 absolute left-3 top-2.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSignup}
                  disabled={loading}
                  className="w-full bg-black text-white py-2.5 px-4 rounded-lg font-bold text-sm hover:bg-yellow-500 hover:text-black transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  style={{ cursor: loading ? "not-allowed" : "pointer" }}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </button>

                {/* Trust Indicators */}
                <div className="pt-3 border-t border-yellow-400/30">
                  <div className="flex items-center justify-center space-x-4 text-xs text-yellow-400">
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span>Fast</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                      <span>Trusted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Hero Section */}
        <div className="hidden lg:flex lg:w-1/4 bg-black/50 backdrop-blur-sm relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg
              className="w-full h-full"
              viewBox="0 0 200 200"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="taxi-pattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <rect width="40" height="40" fill="none" />
                  <circle cx="20" cy="20" r="2" fill="white" opacity="0.3" />
                  <path
                    d="M10 10 L30 30 M30 10 L10 30"
                    stroke="white"
                    strokeWidth="0.5"
                    opacity="0.2"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#taxi-pattern)" />
            </svg>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 bg-yellow-400/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-400/10 rounded-full animate-pulse delay-500"></div>

          {/* Main Content */}
          <div className="relative z-10 flex items-center justify-center p-8 w-full">
            <div className="max-w-lg text-white text-center">
              {/* Hero Icon */}
              <div className="mb-6">
                <div className="w-24 h-24 bg-yellow-400/20 rounded-2xl mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                  <svg
                    className="w-12 h-12 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold mb-3 leading-tight">
                  Drive Your Way,
                  <br />
                  <span className="text-yellow-400">Earn Your Way</span>
                </h2>
                <p className="text-base text-gray-300 mb-6 leading-relaxed">
                  Join our network of professional drivers. Set your own
                  schedule, earn competitive rates, and be your own boss.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 bg-yellow-400/10 p-3 rounded-xl backdrop-blur-sm border border-yellow-400/20">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-white">
                      Flexible Hours
                    </h3>
                    <p className="text-xs text-gray-300">
                      Drive when you want, earn what you want
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-yellow-400/10 p-3 rounded-xl backdrop-blur-sm border border-yellow-400/20">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-white">
                      Weekly Payments
                    </h3>
                    <p className="text-xs text-gray-300">
                      Get paid weekly, no delays
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-yellow-400/10 p-3 rounded-xl backdrop-blur-sm border border-yellow-400/20">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-white">
                      24/7 Support
                    </h3>
                    <p className="text-xs text-gray-300">
                      Help whenever you need it
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="bg-yellow-400/10 p-2 rounded-lg backdrop-blur-sm border border-yellow-400/20">
                  <div className="text-lg font-bold text-white">$25+</div>
                  <div className="text-xs text-gray-300">Per Hour</div>
                </div>
                <div className="bg-yellow-400/10 p-2 rounded-lg backdrop-blur-sm border border-yellow-400/20">
                  <div className="text-lg font-bold text-white">50K+</div>
                  <div className="text-xs text-gray-300">Active Drivers</div>
                </div>
                <div className="bg-yellow-400/10 p-2 rounded-lg backdrop-blur-sm border border-yellow-400/20">
                  <div className="text-lg font-bold text-white">24/7</div>
                  <div className="text-xs text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
