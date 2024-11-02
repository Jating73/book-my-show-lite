import React from 'react'
import CrewMember from './CrewMember'

const CrewList = ({ crewList = [] }) => {
    return (
        <div className="crew-list">
            {crewList.map((crew) => {
                return (
                    <CrewMember name={crew.name} role={crew.role} image={crew.image} />
                )
            })}
        </div>
    )
}

export default CrewList
