import React from 'react'

function Loader() {
    return (
        <div className='absolute top-0 left-0 h-screen w-screen flex items-center justify-center'>
            <i className='fa fa-2x fa-spinner fa-spin'></i>
        </div>
    )
}

export default Loader