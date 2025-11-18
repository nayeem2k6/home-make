import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className=" flex items-center justify-center min-h-[40vh]">
            {/* <button className="btn btn-square loading">loading</button> */} 

            <span className="loading loading-spinner loading-xl"></span>
        </div>
        </div>
    );
};

export default Loader;