
import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Components/Card';

const AllProperties = () => {
    const data = useLoaderData()
    return (
        <div>
            <h1 className='text-3xl sm:text-4xl font-extrabold text-center text-indigo-700 mb-10'>All Properties</h1>
           <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {data.map(Homes => <Card Homes={Homes}></Card>)}
           </div>
        </div>
    );
};

export default AllProperties;  






