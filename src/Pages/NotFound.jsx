
import { useEffect } from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router";

export default function NotFound() {
  useEffect(() => {
    document.title = "HomeNest | 404 Not Found";
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-blue-50 to-amber-50">
      
      <div className="text-red-500 text-7xl mb-4 animate-bounce">
        <MdError />
      </div>

      
      <h1 className="text-6xl font-extrabold text-gray-800 mb-2">404</h1>

      <p className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
        Oops! Page Not Found
      </p>

      
      <p className="text-gray-500 max-w-md mb-8 text-sm sm:text-gray">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>

      
      <Link
        to="/"
        className="btn btn-primary px-8 py-2 font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}
