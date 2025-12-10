import { NavLink, useRouteError } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export const Errorpage = () => {
  const error = useRouteError();
  console.log(error);

  // Try Again function
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <AlertTriangle className="w-16 h-16 text-red-500" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Oops! Something went wrong
        </h1>

        {/* Error message */}
        <p className="text-gray-600 mb-6">
          {error?.data || "An unexpected error occurred. Please try again later."}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <NavLink to="/">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition duration-200">
              Go Home
            </button>
          </NavLink>
          <button
            onClick={handleRetry}
            className="px-6 py-3 bg-gray-600 text-white rounded-xl shadow hover:bg-gray-700 transition duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};
