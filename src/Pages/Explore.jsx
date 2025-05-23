import React from 'react';
import { useLoaderData } from 'react-router';
import GroupDetails from '../components/Group/GroupDetails';

const Explore = () => {
    const groups = useLoaderData();
    return (<>

    <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Hobby Groups</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {groups.map((group) => (
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
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
        </div>

        {
            groups.map((group) => (
               <GroupDetails group={group}></GroupDetails>
            ))

        }





        

    </>
    );
};

export default Explore;