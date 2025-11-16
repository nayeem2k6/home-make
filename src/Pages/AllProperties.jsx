
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Components/Card';

const AllProperties = () => {
    const data = useLoaderData()

     const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All" ? data : data.filter(item => item.category === filter);
    return (
        <div>
            <h1 className='text-3xl sm:text-4xl font-extrabold text-center text-indigo-700 mb-10'>All Properties</h1>
             
               <div className="max-w-md w-full mx-auto mb-8">
        <label className="block font-medium text-base mb-2 text-center sm:text-left">
          Properties Sort
        </label>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-xl 
                     bg-base-200 sm:text-lg"
        >
          <option value="All">All</option>
          <option value="Rent">Rent</option>
          <option value="Sale">Sale</option>
          <option value="Commercial">Commercial</option>
          <option value="Land">Land</option>
        </select>
      </div>
           <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {filteredData.map(Homes => <Card key={Homes._id} Homes={Homes}></Card>)}
           </div>
        </div>
    );
};

export default AllProperties;  






