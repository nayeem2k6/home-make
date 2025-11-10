

import { useAuth } from '../Context/AuthProvider';
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const { register, loginWithGoogle, updateUserProfile } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (pw) => {
    if (pw.length < 6) return "Password must be at least 6 characters";
    if (!/[A-Z]/.test(pw)) return "Password must include an uppercase letter";
    if (!/[a-z]/.test(pw)) return "Password must include a lowercase letter";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    const validationErr = validatePassword(password);
    if (validationErr) {
      toast.error(validationErr);
      return;
    }

    try {
      const res = await register(email, password);
      await updateUserProfile({ displayName: name, photoURL });
      toast.success("Registered successfully!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      toast.success("Logged in with Google!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-amber-50 p-4">
      <div className="w-full max-w-md bg-base-100 shadow-2xl rounded-2xl border border-gray-100 p-6 sm:p-8 space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Create Your Account
        </h2>
        <p className="text-center text-gray-500 text-sm sm:text-base">
          Join ToyTopia and explore the world of fun and creativity!
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            name="name"
            className="input input-bordered w-full"
            placeholder="Full Name"
            required
          />
          <input
            name="email"
            className="input input-bordered w-full"
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            name="photoURL"
            className="input input-bordered w-full"
            placeholder="Photo URL (optional)"
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
            Register
          </button>
        </form>

        <div className="divider text-gray-400">OR</div>

        <button
          onClick={handleGoogle}
          className="btn btn-outline w-full flex items-center justify-center gap-2 font-medium"
        >
          <FcGoogle className="text-xl" /> Continue with Google
        </button>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="link text-primary font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
