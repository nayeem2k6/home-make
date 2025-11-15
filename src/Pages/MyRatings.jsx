
import React, { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa";
import { useAuth } from "../Context/AuthProvider";
import axios from "axios";

const MyRatings = () => {
  const { user } = useAuth();
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios.get("https://home-nest-ten.vercel.app/review").then((res) => {
        const filtered = res.data.filter((r) => r.reviewerEmail === user.email);
        setMyReviews(filtered);
      });
    }
  }, [user]);

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-6">My Ratings & Reviews</h1>

      {myReviews.length === 0 ? (
        <p className="text-center text-gray-600">You haven't rated any property yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {myReviews.map((r, idx) => (
            <div key={idx} className="border rounded-xl shadow-md overflow-hidden bg-white">
              <img src={r.propertyImage} alt="" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-1">{r.propertyName}</h2>
                <div className="flex items-center mb-2">
                  {[...Array(r.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-2">{r.review}</p>
                <p className="text-sm text-gray-500">
                  <strong>By:</strong> {r.reviewerName}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Date:</strong> {new Date(r.postedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRatings;
