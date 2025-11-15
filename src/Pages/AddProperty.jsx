

import React, { useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";

const AddProperty = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Rent",
    price: "",
    location: "",
    image: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://home-nest-ten.vercel.app/Homes", {
        ...formData,
        userEmail: user.email,
        userName: user.displayName,
      });
      toast.success("🏠 Property Added Successfully!");
      setFormData({
        name: "",
        description: "",
        category: "Rent",
        price: "",
        location: "",
        image: "",
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-base flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-base shadow-2xl rounded-2xl p-8 sm:p-10 border border-gray-100">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
          🏡 Add New Property
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium text-base mb-1">
              Property Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Luxury Apartment in Gulshan"
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-medium text-base mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Write short description..."
              rows="3"
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-base mb-1">
                Category
              </label>
              <select
                name="category"
                className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.category}
                onChange={handleChange}
              >
                <option>Rent</option>
                <option>Sale</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-base mb-1">
                Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="e.g. 25000"
                className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-base mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="e.g. Bashundhara, Dhaka"
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-medium text-base mb-1">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-base font-semibold mb-2">
                User Name
              </label>
              <input
                type="text"
                placeholder="Admin User"
                readOnly
                className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 text-gray-500"
              />
            </div>

            <div>
              <label className="block text-base font-semibold mb-2">
                User Email
              </label>
              <input
                type="email"
                placeholder="Admin01@gmail.com"
                readOnly
                className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 text-gray-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg"
          >
            Add Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
