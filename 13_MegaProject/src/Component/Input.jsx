import React, { forwardRef, useId } from 'react'

const Input = forwardRef(({
    label,
    type = 'text',
    classname = '',
    ...props
}, ref) => {

    const id = useId()
    console.log(id)
    return (
        <>
            <div className="w-full">
                {label && <label
                    className='inline-block mb-1 pl-1'
                    htmlFor={id}
                >
                    {label}
                </label>
                }

                <input
                    type={type}
                    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full  ${classname}`}
                    ref={ref}
                    {...props}
                    id={id}
                />
            </div>
        </>
    )
})

export default Input
