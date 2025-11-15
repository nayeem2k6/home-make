

import React, { useState } from "react";
import { useAuth } from '../Context/AuthProvider'
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const { login, loginWithGoogle } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(e.target.email.value, e.target.password.value);
      toast.success("Logged in successfully!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      toast.success("Logged in with Google!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-amber-50 to-blue-50 p-4">
      <div className="w-full max-w-md bg-base-100 shadow-2xl rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-gray">
          Login to your HomeNest account and continue your fun journey!
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            name="email"
            type="email"
            className="input input-bordered w-full"
            placeholder="Email Address"
            required
          />

          <div className="relative">
            <input
              name="password"
              type={showPass ? "text" : "password"}
              className="input input-bordered w-full pr-16"
              placeholder="Password"
              required
            />
            <button
              type="button"
              className="absolute top-1/2 right-2 -translate-y-1/2 text-sm font-medium text-primary hover:underline"
              onClick={() => setShowPass((s) => !s)}
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>

          <button className="btn btn-primary w-full font-semibold">
            Login
          </button>
        </form>

        <div className="flex justify-between items-center text-sm">
          
          <p className="text-gray-600">
            New here?{" "}
            <Link to="/register" className="link text-primary font-medium">
              Register
            </Link>
          </p>
        </div>

        <div className="divider text-gray-400">OR</div>

        <button
          onClick={handleGoogle}
          className="btn btn-outline w-full flex items-center justify-center gap-2 font-medium"
        >
          <FcGoogle className="text-xl" /> Continue with Google
        </button>
      </div>
    </div>
  );
}
