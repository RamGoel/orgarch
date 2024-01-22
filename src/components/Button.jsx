import React from 'react'

const Button = ({
    type = 'submit',
    extraClass = "",
    isLoading = false,
    text = 'Submit',
    isDisabled=false
}) => {
    return (
        <button
            type={type}
            disabled={isDisabled}
            className={'p-3 bg-black w-full text-white rounded-xl'+ extraClass}
        >
            {(isLoading) ? 'Loading....' : text}
        </button>
    )
}

export default Button