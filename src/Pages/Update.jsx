

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch property data
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`https://home-nest-ten.vercel.app/users`);
        const properties = response.data;
        
        // Find the specific property by ID
        const foundProperty = properties.find(prop => prop._id === id);
        
        if (foundProperty) {
          setProperty(foundProperty);
        } else {
          toast.error("Property not found!");
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching property:", error);
        toast.error("Failed to load property data");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id, navigate]);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  // Handle update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://home-nest-ten.vercel.app/update/${id}`, property);
      toast.success("Property updated successfully!");
      navigate(`/view/${id}`);
    } catch (error) {
      toast.error("Update failed. Try again!");
    }
  };

  if (loading) {
    return <p className="text-center text-lg text-gray-600 py-12">Loading...</p>;
  }

  if (!property) {
    return <p className="text-center text-lg text-gray-600 py-12">Property not found!</p>;
  }

  return (
    <section className="bg-base py-16 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-w-3xl mx-auto bg-base shadow-2xl rounded-3xl p-8 md:p-10">
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-8">
          Update Property
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Editable fields */}
          <div>
            <label className="block text-base font-semibold mb-2">
              Property Name
            </label>
            <input
              type="text"
              name="name"
              value={property.name || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-base font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={property.description || ""}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-base font-semibold mb-2">
                Category
              </label>
              <select
                name="category"
                value={property.category || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              >
                <option value="">Select Category</option>
                <option value="Sale">Sale</option>
                <option value="Rent">Rent</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <div>
              <label className="block text-base font-semibold mb-2">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={property.price || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-base font-semibold mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={property.location || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-base font-semibold mb-2">
                Image Link
              </label>
              <input
                type="text"
                name="image"
                value={property.image || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
          </div>

          {/* Read-only fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-base font-semibold mb-2">
                User Name
              </label>
              <input
                type="text"
                value={property.userName || ""}
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
                value={property.userEmail || ""}
                readOnly
                className="w-full bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 text-gray-500"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <button 
              type="submit"
              className="bg-indigo-600 text-white font-bold px-10 py-3 rounded-full hover:bg-indigo-700 transition duration-300 w-full md:w-auto"
            >
              Update Property
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateProperty;