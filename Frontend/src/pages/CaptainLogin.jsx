import React, { useState } from "react";
import CaptainLogo from "../components/CaptainLogo";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const loginData = {
      email: email,
      password: password,
    };
    console.log(loginData);
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('loginImg.jpg')`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row">
        {/* Left side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="mb-6">
              <CaptainLogo />
            </div>

            {/* Login Form */}
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-white mb-1">
                  Welcome Back, Captain!
                </h1>
                <p className="text-sm text-gray-200">
                  New to Taxi-Go?{" "}
                  <a
                    href="/captain-signup"
                    className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                  >
                    Start Your Journey
                  </a>
                </p>
              </div>

              {/* Quick Access Buttons */}
              <div className="flex justify-center mb-4 w-full">
                <Link
                  to={!loading ? "/user-login" : "#"}
                  className={`flex items-center justify-center w-full px-8 py-2.5 border-2 rounded-lg transition-all duration-200 group ${
                    window.location.pathname === "/user-login"
                      ? "bg-yellow-400 border-yellow-400 text-black"
                      : "bg-black/50 border-yellow-400 text-white hover:bg-yellow-400/20"
                  }`}
                  style={{
                    cursor: loading ? "not-allowed" : "pointer",
                    minWidth: "200px",
                  }}
                >
                  <svg
                    className={`w-5 h-5 mr-3 group-hover:scale-110 transition-transform ${
                      window.location.pathname === "/user-login"
                        ? "text-black"
                        : "text-yellow-400"
                    }`}
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
                  <span className="font-medium text-sm">Switch to Rider</span>
                </Link>
              </div>

              {/* Social Login */}
              <div className="space-y-2">
                <button
                  className="w-full flex items-center justify-center px-3 py-2 border border-yellow-400 rounded-lg bg-black/50 hover:bg-black/70 transition-all duration-200"
                  style={{ cursor: loading ? "not-allowed" : "pointer" }}
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-white font-medium text-sm">
                    Continue with Google
                  </span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-yellow-400/30"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-black/50 text-yellow-400 font-medium">
                    Or sign in with email
                  </span>
                </div>
              </div>

              {/* Email/Password Form */}
              <div className="space-y-3">
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
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label
                      htmlFor="password"
                      className="block text-xs font-semibold text-yellow-400"
                    >
                      Password
                    </label>
                    <a
                      href="/forgot-password"
                      className="text-xs text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 pl-10 py-2 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/50 text-white placeholder-gray-400 text-sm"
                      placeholder="Enter your password"
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

                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="w-full bg-black text-white py-2.5 px-4 rounded-lg font-bold text-sm hover:bg-yellow-500 hover:text-black transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  style={{ cursor: loading ? "not-allowed" : "pointer" }}
                >
                  {loading ? "Loading..." : "Start Driving"}
                </button>
              </div>

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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 17l6-6-6-6"
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

export default CaptainLogin;
