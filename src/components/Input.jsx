import React from 'react'

const Input = ({
    type = 'text',
    extraClass = '',
    isOptional = false,
    changeHandler = () => { },
    placeholder = '',
}) => {
    return (
        <input
          type={type}
          className={'p-2 py-3 border-2 rounded-lg w-full text-black placeholder:text-black border-black my-3'+ extraClass}
          required={!isOptional}
          onChange={(e)=>changeHandler(e.target.value)}
          placeholder={placeholder}
        />
  )
}

export default Input