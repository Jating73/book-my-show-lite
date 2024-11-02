import React from 'react'

const CastMember = ({ name = "", role = "", image = "" }) => {
    return (
        <div className="cast-member">
            <img src={image} alt={name} />
            <p className="cast-name">{name}</p>
            <p className="cast-role">{role}</p>
        </div>
    )
}

export default CastMember
