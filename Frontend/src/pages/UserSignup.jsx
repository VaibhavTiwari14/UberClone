import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const passChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    if (confirmPassword === formData.password) {
      setLoading(true);
      console.log(formData);
    }else{
      alert("password does not match");
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/loginImg.jpg')`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row">
        {/* Left side - Signup Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="mb-6">
              <Logo />
            </div>

            {/* Signup Form */}
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">
                  Join Our Journey!
                </h1>
                <p className="text-sm text-gray-200">
                  Already have an account?{" "}
                  <Link
                    to={loading ? "#" : "/user-login"}
                    className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                  >
                    Sign In
                  </Link>
                </p>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-xs font-semibold text-yellow-400 mb-1"
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      value={formData.firstname}
                      onChange={handleChange}
                      className="w-full px-3 pl-10 py-2 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/50 text-white placeholder-gray-400 text-sm"
                      placeholder="First-Name"
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
                    className="block text-xs font-semibold text-yellow-400 mb-1"
                  >
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      value={formData.lastname}
                      onChange={handleChange}
                      className="w-full px-3 pl-10 py-2 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/50 text-white placeholder-gray-400 text-sm"
                      placeholder="Last-Name"
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

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-yellow-400 mb-1"
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
                    className="w-full px-3 pl-10 py-2 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/50 text-white placeholder-gray-400 text-sm"
                    placeholder="your.email@example.com"
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

              {/* Password Fields */}
              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold text-yellow-400 mb-1"
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
                      className="w-full px-3 pl-10 py-2 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/50 text-white placeholder-gray-400 text-sm"
                      placeholder="Create a password"
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
                    className="block text-xs font-semibold text-yellow-400 mb-1"
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
                      className="w-full px-3 pl-10 py-2 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/50 text-white placeholder-gray-400 text-sm"
                      placeholder="Confirm your password"
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

        {/* Right side - Hero Section */}
        <div className="hidden lg:flex lg:w-1/2 bg-black/50 backdrop-blur-sm relative overflow-hidden">
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
                  Join Our Community,
                  <br />
                  <span className="text-yellow-400">Start Riding</span>
                </h2>
                <p className="text-base text-gray-300 mb-6 leading-relaxed">
                  Create your account and experience the future of
                  transportation with instant bookings, real-time tracking, and
                  rides that fit your lifestyle.
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-white">
                      Quick Signup
                    </h3>
                    <p className="text-xs text-gray-300">
                      Get started in under 2 minutes
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-white">
                      Secure Account
                    </h3>
                    <p className="text-xs text-gray-300">
                      Your data is always protected
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-white">
                      Instant Access
                    </h3>
                    <p className="text-xs text-gray-300">
                      Start riding immediately
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="bg-yellow-400/10 p-2 rounded-lg backdrop-blur-sm border border-yellow-400/20">
                  <div className="text-lg font-bold text-white">1M+</div>
                  <div className="text-xs text-gray-300">Happy Riders</div>
                </div>
                <div className="bg-yellow-400/10 p-2 rounded-lg backdrop-blur-sm border border-yellow-400/20">
                  <div className="text-lg font-bold text-white">50K+</div>
                  <div className="text-xs text-gray-300">Expert Drivers</div>
                </div>
                <div className="bg-yellow-400/10 p-2 rounded-lg backdrop-blur-sm border border-yellow-400/20">
                  <div className="text-lg font-bold text-white">24/7</div>
                  <div className="text-xs text-gray-300">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
