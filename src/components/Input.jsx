import React from 'react'

const Input = ({
    type = 'text',
    extraClass = '',
    isOptional = false,
    changeHandler = () => { },
    placeholder = '',
}) => {
    return (
        <div className='my-3 w-full'>
            <label className='font-semibold mb-2'>{placeholder}:</label>
            <input
                type={type}
                className={'p-2 py-3 border-2 rounded-lg w-full text-black placeholder:text-black border-black my-1' + extraClass}
                required={!isOptional}
                onChange={(e) => changeHandler(e.target.value)}
            />
        </div>
    )
}

export default Input