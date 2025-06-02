import React from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogo = () => {
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate("/");
  };
  return (
    <div
      onClick={gotoMain}
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
    >
      <div className="flex flex-col items-center md:flex-row md:items-center">
        <h1
          className="text-3xl md:text-4xl font-extrabold tracking-wide flex items-center"
          style={{
            fontFamily:
              '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          {/* Driver-focused design with yellow-black theme */}
          <div className="relative bg-gradient-to-r from-yellow-400/20 to-amber-500/20 backdrop-blur-md border border-yellow-400/30 rounded-full px-6 py-2 shadow-[0_8px_32px_rgba(251,191,36,0.15)] hover:shadow-[0_12px_40px_rgba(251,191,36,0.25)] transition-all duration-300">
            {/* Captain Logo SVG */}
            <svg
              className="w-8 h-8 mr-2 inline-block text-yellow-400 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
              <circle cx="12" cy="12" r="3" />
              <path d="M12 9v3" />
              <path d="M12 15v3" />
              <path d="M9 12h3" />
              <path d="M15 12h3" />
            </svg>
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
              className="text-black mx-2 drop-shadow-sm font-extrabold"
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              }}
            >
              •
            </span>
            <span
              className="text-black drop-shadow-sm font-extrabold tracking-wider"
              style={{
                fontFamily:
                  '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
              }}
            >
              GO
            </span>

            {/* Yellow glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/30 to-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </div>
        </h1>

        {/* Professional badge - responsive positioning */}
        <div
          className="mt-1 md:mt-0 md:ml-3 bg-gradient-to-r from-black to-gray-900 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-lg w-fit tracking-widest"
          style={{
            fontFamily:
              '"SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
          }}
        >
          PRO
        </div>
      </div>
    </div>
  );
};

export default CaptainLogo;
