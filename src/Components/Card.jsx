import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Card = ({Homes}) => {
    const Data = useLoaderData()

    return (
        <div>
            <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200">
<div className="w-full h-44 sm:h-56 lg:h-48 overflow-hidden">
<img
src={Homes.image}
alt={Homes.name}
className="w-full h-full object-cover"
/>
</div>


<div className="p-4">
<div className="flex items-start justify-between gap-2">
<h3 className="text-lg font-semibold line-clamp-2">{Homes.name}</h3>
<span className="text-sm px-3 py-1 rounded-full border text-gray-700">{Homes.category}</span>
</div>

<p>Price:{Homes.price}</p>

<div className="mt-2 text-sm text-gray-600 flex items-center justify-between">
<div>
<p className="truncate">{Homes.location}</p>
<p className="text-xs text-gray-500">Posted by <span className="font-medium">{Homes.userName}</span></p>
</div>


<Link
to={`/properties/${Homes._id}`}
className="ml-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-indigo-700 transition-colors"
>
See Details
</Link>
</div>
</div>
</article>

        </div>
    );
};

export default Card;