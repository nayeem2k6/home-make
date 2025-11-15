import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useAuth } from "../Context/AuthProvider";

export default function MyProperties() {
  const { user } = useAuth();
  const properties = useLoaderData();
  console.log(properties);

  const filteredProperties = properties.filter(
    (item) => item.userEmail === user.email
  );
  const navigate = useNavigate();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://home-nest-ten.vercel.app/models/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        navigate("/my");
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-base py-10 px-5">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-base">
        My Properties
      </h1>

      {filteredProperties.length === 0 ? (
        <p className="text-center text-gray-600">No properties found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <div
              key={property._id}
              className="bg-base rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-2">
                <h2 className="text-xl font-semibold text-base">
                  {property.name}
                </h2>
                <p className="text-base text-sm">{property.category}</p>
                <p className="text-base font-bold">৳ {property.price}</p>
                <p className="text-base text-sm">{property.location}</p>
                <p className="text-base text-xs">
                  Posted:{" "}
                  {new Date(
                    property.postedAt || Date.now()
                  ).toLocaleDateString()}
                </p>

                <div className="flex justify-between mt-3">
                  <Link
                    to={`/update/${property._id}`}
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(property._id)}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/view/${property._id}`}
                    className="px-3 py-1 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
