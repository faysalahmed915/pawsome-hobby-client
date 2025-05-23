import React from 'react';
import { Link } from 'react-router';

const Group = ({ group }) => {
    // console.log(group._id)

    return (
        <div
            key={group._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl max-w-md mx-auto flex flex-col"
        >
            <img
                src={group.imageUrl}
                alt={group.groupName}
                className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{group.groupName}</h2>
                <p className="text-gray-700 mb-4">{group.description}</p>
                <div className="text-sm text-gray-500 space-y-1 mb-6">
                    <p>📍 {group.location}</p>
                    <p>👥 Max Members: {group.maxMembers}</p>
                    <p>📅 Starts: {group.startDate}</p>
                </div>
                {/* Push the button to the bottom right */}
                <div className="mt-auto flex justify-end">
                    <Link to={`/group/${group._id}`} className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                            View Details
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Group;