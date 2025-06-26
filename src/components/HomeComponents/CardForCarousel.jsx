import React from 'react';

const CardForCarousel = ({ group }) => {
    console.log(group)

    const { groupName, description, location, maxMembers, startDate, imageUrl } = group;
    return (
        <div className="w-72 p-4 bg-base-100 rounded-2xl shadow-lg">
            <img src={imageUrl} alt={groupName} className="w-full h-40 object-cover rounded-xl mb-3" />
            <h2 className="text-xl font-semibold">{groupName}</h2>
            <p className="text-sm mb-1">{description || 'No description available'}</p>
            <p className="text-xs">📍 {location || 'Not specified'}</p>
            <p className="text-xs">👥 Max: {maxMembers || 'N/A'}</p>
            <p className="text-xs">📅 Start: {startDate || 'N/A'}</p>
        </div>
    );
};

export default CardForCarousel;