import React from "react";

const Logo = () => {
  return (
    <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
      <div className="flex flex-col items-center md:flex-row md:items-center">
        <h1
          className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide flex items-center"
          style={{
            fontFamily:
              '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          <div className="relative bg-gradient-to-r from-yellow-400/20 to-amber-500/20 backdrop-blur-md border border-yellow-400/30 rounded-full px-4 md:px-6 py-2 shadow-[0_8px_32px_rgba(251,191,36,0.15)] hover:shadow-[0_12px_40px_rgba(251,191,36,0.25)] transition-all duration-300">
            <span
              className="text-yellow-400 drop-shadow-lg font-extrabold tracking-wider"
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              }}
            >
              TAXI
            </span>
            <span
              className="text-gray-800 mx-2 drop-shadow-sm font-extrabold"
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              }}
            >
              •
            </span>
            <span
              className="text-gray-800 drop-shadow-sm font-extrabold tracking-wider"
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              }}
            >
              GO
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/30 to-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </div>
        </h1>
      </div>
    </div>
  );
};

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-200/40 to-amber-200/40 rounded-full blur-2xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-yellow-300/20 to-amber-300/20 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>

      <div className="text-center relative z-10">
        {/* Logo with gradient backdrop */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/50 to-amber-100/50 rounded-full blur-xl scale-110"></div>
          <div className="relative">
            <Logo />
          </div>
        </div>

        {/* Loading text with gradient */}
        <div className="mb-8">
          <p
            className="text-xl font-semibold bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 bg-clip-text text-transparent animate-pulse"
            style={{
              fontFamily:
                '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
            }}
          >
            Loading your premium experience...
          </p>
        </div>

        {/* Gradient loading bar */}
        <div className="w-64 h-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mx-auto mb-6 overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 rounded-full animate-gradientLoad shadow-lg"
            style={{
              backgroundSize: "200% 100%",
            }}
          ></div>
        </div>

        {/* Animated gradient dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full animate-bounce shadow-lg"></div>
          <div
            className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-bounce shadow-lg"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-3 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full animate-bounce shadow-lg"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
