

import React from "react";
import { useAuth } from '../Context/AuthProvider';
import { Link, NavLink } from "react-router";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { FcHome } from "react-icons/fc";

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
  };

  return (

<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <div
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <NavLink  to="/home" className={({isActive}) => isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"}>Home</NavLink>
        <NavLink to="/all" className={({isActive}) => isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"}>All Properties</NavLink>
        <NavLink to="/Properties" className={({isActive}) => isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"}>Add Properties</NavLink>
        <NavLink to="/profile" className={({isActive}) => isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"}>My Properties</NavLink>
        <NavLink to="/rating" className={({isActive}) => isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"}>My Ratings</NavLink>
      </div>
    </div>
    <a className="btn btn-ghost text-xl"> <FcHome />HomeNest</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <div className="menu menu-horizontal px-1">
      <NavLink to="/home" className={({isActive}) => isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"}>Home</NavLink>
      <NavLink to="/all" className={({isActive}) => isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"}>All Properties</NavLink>
      <NavLink to="/Properties" className={({isActive}) => isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"}>Add Properties</NavLink>
      <NavLink to="/profile" className={({isActive}) => isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"}>My Properties</NavLink>
      <NavLink to="/rating" className={({isActive}) => isActive ? "btn btn-ghost btn-active" : "btn btn-ghost"}>My Ratings</NavLink>
    
     
    </div>
  </div>
  <div className="navbar-end">
    
     {user ? (
          <div className="flex items-center mt-5 gap-2">
            <div className="tooltip" data-tip={user.displayName || user.email}>
              {user.photoURL ? (
                <img src={user.photoURL} alt="user" className="w-10 h-10 rounded-full" />
              ) : (
                <FaUserCircle size={28} />
              )}
            </div>
            <button onClick={handleLogout} className="btn btn-sm btn-warning"><FaSignOutAlt /></button>
          </div>
        ) : ( <NavLink to="/login" className="btn btn-primary">Login</NavLink>
        )}

  </div>
</div>



  )
   
}
