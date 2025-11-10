
import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Components/Card';

const AllProperties = () => {
    const data = useLoaderData()
    return (
        <div>
            <h1 className='text-center font-extrabold'>All Properties</h1>
           <div className='grid grid-cols-3 lg:grid-cols-4 gap-3'>
            {data.map(Homes => <Card Homes={Homes}></Card>)}
           </div>
        </div>
    );
};

export default AllProperties;