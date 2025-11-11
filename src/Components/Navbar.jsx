

import React, { useState } from "react";
import { useAuth } from "../Context/AuthProvider";

import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { Link, NavLink } from "react-router";
import { MdDarkMode } from "react-icons/md";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            aria-label="menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/all"
              className={({ isActive }) =>
                isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"
              }
            >
              All Properties
            </NavLink>
            <NavLink
              to="/Properties"
              className={({ isActive }) =>
                isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"
              }
            >
              Add Properties
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"
              }
            >
              My Properties
            </NavLink>
            <NavLink
              to="/rating"
              className={({ isActive }) =>
                isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"
              }
            >
              My Ratings
            </NavLink>
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-1">
          <FcHome className="text-2xl" />
          <span className="font-bold">HomeNest</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all"
            className={({ isActive }) =>
              isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"
            }
          >
            All Properties
          </NavLink>
          <NavLink
            to="/Properties"
            className={({ isActive }) =>
              isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"
            }
          >
            Add Properties
          </NavLink>
          <NavLink
            to="/my"
            className={({ isActive }) =>
              isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"
            }
          >
            My Properties
          </NavLink>
          <NavLink
            to="/rating"
            className={({ isActive }) =>
              isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"
            }
          >
            My Ratings
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="relative flex items-center gap-2">
            <div
              className="tooltip cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="user"
                  className="w-10 h-10 rounded-full border-2 border-blue-500"
                />
              ) : (
                <FaUserCircle size={32} className="text-blue-600" />
              )}
            </div>
            
            {open && (
              <div className="absolute right-0 top-12 w-56 bg-white shadow-lg rounded-lg p-3 z-[1000]">
                <p className="font-semibold text-gray-800">
                  {user.displayName || "No Name"}
                </p>
                <p className="text-gray-500 text-sm break-words">
                  {user.email}
                </p>
                <button
                  onClick={handleLogout}
                  className="w-full mt-3 flex items-center justify-center gap-2 bg-red-500 text-white py-1.5 rounded-md hover:bg-red-600 transition-all"
                >
                  <FaSignOutAlt /> LogOut
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <NavLink to="/login" className="btn btn-primary">
              Login
            </NavLink>
            <NavLink
              to=""
              className="btn rounded-full h-10 w-10 hidden sm:inline"
            >
              <MdDarkMode className="size-6" />
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

