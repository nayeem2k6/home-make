
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext'

export default function PropertyDetails() {
  const { id } = useParams()
  const { user } = useAuth()
  const [property, setProperty] = useState(null)
  const [rating, setRating] = useState(5)
  const [review, setReview] = useState('')
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchProperty = async () => {
      const res = await axios.get(`http://localhost:5000/api/properties/${id}`)
      setProperty(res.data)
    }
    fetchProperty()
  }, [id])

  const handleSubmitReview = () => {
    const newReview = { user: user.displayName, rating, review }
    setReviews([newReview, ...reviews])
    setRating(5)
    setReview('')
  }

  if(!property) return <div className="p-8">Loading...</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">{property.name}</h2>
      <img src={property.imageURL} alt={property.name} className="w-full max-h-96 object-cover rounded mb-4" />
      <p className="mb-2"><strong>Category:</strong> {property.category}</p>
      <p className="mb-2"><strong>Location:</strong> {property.location}</p>
      <p className="mb-2"><strong>Price:</strong> {property.price}</p>
      <p className="mb-2"><strong>Description:</strong> {property.description}</p>
      <p className="mb-2"><strong>Posted by:</strong> {property.userName} ({property.userEmail})</p>

      {/* Ratings */}
      <div className="mt-6 border-t pt-4">
        <h3 className="text-2xl font-bold mb-2">Ratings & Reviews</h3>
        <div className="mb-4">
          <label>Rating:</label>
          <input type="number" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} className="border p-1 rounded ml-2 w-16"/>
          <textarea placeholder="Write a review..." value={review} onChange={e => setReview(e.target.value)} className="w-full border p-2 rounded mt-2" />
          <button onClick={handleSubmitReview} className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600">Submit Review</button>
        </div>

        {reviews.map((r, idx) => (
          <div key={idx} className="border p-2 rounded mb-2">
            <p><strong>{r.user}</strong> rated {r.rating} / 5</p>
            <p>{r.review}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
