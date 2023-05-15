import React from 'react'

function Loader() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <i className='fa fa-2x fa-spinner fa-spin'></i>
        </div>
    )
}

export default Loader