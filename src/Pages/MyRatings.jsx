

import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAuth } from "../Context/AuthProvider";


const MyRatings = () => {
  const { user } = useAuth();
  const [ratings, setRatings] = useState([]);
  // const data = useLoaderData()
  // console.log(data)

  useEffect(() => {
    
    fetch("http://localhost:3000/users/") 
      .then((res) => res.json())
      .then((data) => {
        // Filter ratings by current user email
        const myReviews = [];

        data.forEach((property) => {
          if (property.ratings && property.ratings.length > 0) {
            property.ratings.forEach((r) => {
              if (r.userId === user?.uid || r.userEmail === user?.email) {
                myReviews.push({
                  propertyName: property.name,
                  propertyImage: property.image,
                  review: r.review,
                  rating: r.rating,
                  date: r.date,
                  reviewer: user?.displayName || "You",
                });
              }
            });
          }
        });

        setRatings(myReviews);
      });
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        My Ratings & Reviews
      </h1>

      {ratings.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t given any reviews yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ratings.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={r.propertyImage}
                alt={r.propertyName}
                className="w-full h-44 object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold">{r.propertyName}</h2>
              <p className="text-sm text-gray-500 mb-2">
                Reviewed by: <span className="font-medium">{r.reviewer}</span>
              </p>

              {/* ⭐ Rating Stars */}
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`${
                      index < r.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 italic">"{r.review}"</p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(r.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRatings;
