import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className=" flex items-center justify-center min-h-[40vh]">
            <button className="btn btn-square loading">loading</button>
        </div>
        </div>
    );
};

export default Loader;