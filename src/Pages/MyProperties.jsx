import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { useAuth } from '../Context/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyProperties= () => {
    const data = useLoaderData()
    console.log(data)

   const { user } = useAuth()
  const [properties, setProperties] = useState([])

  const fetchProperties = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/Homes/{id}`)
      const userProps = res.data.filter(p => p.userEmail === user.email)
      setProperties(userProps)
    } catch(err) { toast.error(err.message) }
  }

  useEffect(() => { fetchProperties() }, [])

  const handleDelete = async id => {
    if (!window.confirm("Are you sure?")) return
    try {
      await axios.delete(`http://localhost:3000/Homes/${id}`)
      setProperties(properties.filter(p => p._id !== id))
      toast.success("Property Deleted")
    } catch(err) { toast.error(err.message) }
  }







    return (
        <div>
        <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">My Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {properties.map(prop => (
          <div key={prop._id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-bold">{prop.name}</h3>
            <p>{prop.category} | {prop.location}</p>
            <p className="font-semibold">{prop.price}</p>
            <div className="mt-4 flex gap-2">
              <Link to={`/property/${prop._id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">View</Link>
              <button onClick={() => handleDelete(prop._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default MyProperties;