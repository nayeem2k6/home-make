



import React from 'react';
import { Link } from 'react-router';

const HomeCard = ({ model }) => {
  return (
    <div className="">
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
        {/* Image Section */}
        <div className="relative w-full h-48 sm:h-56 md:h-60 overflow-hidden">
          <img
            src={model.image}
            alt={model.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <span className="absolute top-3 left-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {model.category}
          </span>
        </div>

        {/* Card Body */}
        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-2 mb-2">
              {model.name}
            </h3>

            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              📍 Location: {model.location}
            </p>

            <p className="text-gray-800 font-semibold text-base sm:text-lg">
              💰 {model.price} BDT
            </p>
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between flex-wrap gap-2">
            <div className="text-xs sm:text-sm text-gray-500">
              Posted by{' '}
              <span className="font-semibold text-indigo-600">
                {model.userName}
              </span>
            </div>

            <Link
              to={`/view/${model._id}`}
              className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300"
            >
              See Details
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HomeCard;
