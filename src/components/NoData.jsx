import React from 'react';

const NoDataPage = ({message}) => {
    return (
        <div className="no-data-page">
            <h1 className="title">No Data Found</h1>
            <p className="description">{message || "We couldn't find any data at the moment"}</p>
            <style jsx>{`.no-data-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.title {
  font-size: 2rem;
  margin-bottom: 0px;
  padding:0px
}

.description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  margin-top:0px;
  padding:0px
}

`}

            </style>
        </div>
    );
};

export default NoDataPage;
