

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthProvider";
import { useParams } from "react-router";
import { toast } from "react-toastify";

export default function PropertyDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const [property, setProperty] = useState(null);
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchProperty = async () => {
      const res = await axios.get(`https://home-nest-ten.vercel.app/Homes/${id}`);

      setProperty(res.data.result);
    };
    fetchProperty();
  }, [id]);
  console.log(property)




   useEffect(() => {
    axios.get("https://home-nest-ten.vercel.app/review").then((res) => {
      const filtered = res.data.filter((r) => r.propertyId === id);
      setReviews(filtered);
    });
  }, [id]);



const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please login to submit a review");
      return;
    }

    const newReview = {
      propertyId: id,
      propertyName: property?.name,
      propertyImage: property?.image,
      reviewerName: user?.displayName || "Anonymous",
      reviewerEmail: user?.email,
      rating: rating,
      review: review,
    };

    try {
      await axios.post("https://home-nest-ten.vercel.app/review-post", newReview);
      toast.success("Review submitted successfully!");
      setRating(0);
      setReview("");

      // Reload reviews
      const res = await axios.get("https://home-nest-ten.vercel.app/review");
      const filtered = res.data.filter((r) => r.propertyId === id);
      setReviews(filtered);
    } catch (error) {
      toast.error("Failed to post review");
    }
  };



  if (!property)
    return (
      <div className="flex justify-center items-center h-[60vh] text-lg font-semibold">
        Loading...
      </div>
    );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Property Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-center text-blue-700">
        {property.name}
      </h2>

      {/* Image & Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Image */}
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-64 sm:h-80 md:h-[26rem] object-cover rounded-2xl shadow-md"
        />

        {/* Details */}
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Category:</strong> {property.category}
          </p>
          <p>
            <strong>Location:</strong> {property.location}
          </p>
          <p>
            <strong>Price:</strong>{" "}
            <span className="text-green-600 font-semibold">
              ${property.price}
            </span>
          </p>
          <p>
            <strong>Description:</strong> {property.description}
          </p>
          <p>
            <strong>Posted by:</strong>{" "}
            <span className="text-blue-600">
              {property.userName} ({property.userEmail})
            </span>
          </p>
        </div>
      </div>

      {/* Ratings & Reviews Section */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Ratings & Reviews
        </h3>

        {/* Review Input Box */}
        <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
          <label className="font-medium text-gray-700">Rating:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border p-1 rounded ml-2 w-16 text-center"
          />

          <textarea
            placeholder="Write a review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full border p-3 rounded-lg mt-3 focus:ring-2 focus:ring-blue-300 resize-none"
            rows="3"
          />

          <button Link to={'/rating'}
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-3 hover:bg-blue-700 transition-all duration-200 w-full sm:w-auto"
          >
            Submit Review
          </button>
        </div>

        {/* Reviews List */}
        <div className="mt-6 space-y-4">
          {reviews.length === 0 && (
            <p className="text-gray-500">No reviews yet. Be the first!</p>
          )}
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition"
            >
              <p className="font-semibold text-blue-700">
                {r.user} rated{" "}
                <span className="text-yellow-500 font-bold">{r.rating}/5</span>
              </p>
              <p className="text-gray-600 mt-1">{r.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
