import React from 'react'

const CrewMember = ({ name = "", role = "", image = "" }) => {
    return (
        <div className="crew-member" key={name}>
            <img src={image} alt={name} />
            <p className="crew-name">{name}</p>
            <p className="crew-role">{role}</p>
        </div>
    )
}

export default CrewMember
