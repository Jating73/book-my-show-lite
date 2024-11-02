import React from 'react'
import CastMember from './CastMember'

const CastList = ({ castList = [] }) => {
    return (
        <div className="cast-list">
            {/* Example of cast member - repeat for each */}
            {castList.map((cast) => {
                return (
                    <CastMember name={cast.name} role={cast.role} image={cast.image} key={castList.name} />
                )
            })}
        </div>
    )
}

export default CastList
