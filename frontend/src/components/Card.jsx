import React from 'react'

export default function Card({children, bg='bg-amber-50'}) {
    return (
        <div className={`${bg} shadow-md rounded-lg`}>
            {children}
        </div>
    )
}
