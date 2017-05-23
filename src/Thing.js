import React from 'react'

const Thing = ({ thing }) => {
    return (
        <li className="thing">{thing.name}</li>
    )
}

export default Thing