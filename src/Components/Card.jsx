
import React from "react";
import { Link } from "react-router";

const Card = ({ Homes }) => {
  return (
    <article className="bg-base rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image Section */}
      <div className="relative w-full h-52 sm:h-64 md:h-56 overflow-hidden">
        <img
          src={Homes.image}
          alt={Homes.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"/>
        <span className="absolute top-3 left-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {Homes.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-semibold text-gray line-clamp-2 mb-2">
            {Homes.name}
          </h3>


           <div>
            <label className="block text-gray font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={Homes.description || ""}
              rows={3}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          <p className="text-gray text-sm mb-3 line-clamp-2">
            Location: {Homes.location}
          </p>

          <p className="text-gray font-semibold text-lg">
            💰 {Homes.price} BDT
          </p>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-gray">
            Posted by{" "}
            <span className="font-semibold text-indigo-600">
              {Homes.userName}
            </span>
          </div>

          <Link
            to={`/view/${Homes._id}`}
            className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300"
          >
            See Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;
