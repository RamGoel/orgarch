import React from 'react';

const NoDataPage = ({message}) => {
    return (
        <div className="flex items-center justify-center flex-col">
            <h1 className="text-[2rem] mb-0 p-0">No Data Found</h1>
            <p className="text-[1.2rem] mb-[2rem] mt-0 p-0">{message || "We couldn't find any data at the moment"}</p>
        </div>
    );
};

export default NoDataPage;
