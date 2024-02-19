import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props

}) {
    return (
        <div className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </div>
    )
}

// ForordRef :-      give a Refrence of another Component in another component

export default Button
