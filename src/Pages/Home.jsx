import React from 'react';
import { useLoaderData } from 'react-router';
import GroupDetails from '../components/Group/GroupDetails';
// import { UserContext } from '../Provider/UserProvider';

const Home = () => {
    // const { fetchedData } = useContext(UserContext);
    const groups = useLoaderData();
    // console.log(users);
    



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



        {/* <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Hobby Groups</h1>
            <div className="space-y-6">
                {groups.map((group) => (
                    <div
                        key={group._id}
                        className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl"
                    >
                        <img
                            src={group.imageUrl}
                            alt={group.groupName}
                            className="w-full md:w-1/3 h-64 md:h-auto object-cover"
                        />
                        <div className="p-4 flex-1 space-y-2">
                            <h2 className="text-2xl font-semibold">{group.groupName}</h2>
                            <p className="text-gray-600">{group.description}</p>
                            <p className="text-sm text-gray-500">📍 {group.location}</p>
                            <p className="text-sm text-gray-500">👥 Max Members: {group.maxMembers}</p>
                            <p className="text-sm text-gray-500">📅 Starts: {group.startDate}</p>
                            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Hobby Groups</h1>

            <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
                {groups.map((group) => (
                    <div
                        key={group._id}
                        className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl"
                    >
                        <img
                            src={group.imageUrl}
                            alt={group.groupName}
                            className="w-full md:w-1/3 h-64 md:h-auto object-cover"
                        />
                        <div className="p-4 flex-1 space-y-2">
                            <h2 className="text-2xl font-semibold">{group.groupName}</h2>
                            <p className="text-gray-600">{group.description}</p>
                            <p className="text-sm text-gray-500">📍 {group.location}</p>
                            <p className="text-sm text-gray-500">👥 Max Members: {group.maxMembers}</p>
                            <p className="text-sm text-gray-500">📅 Starts: {group.startDate}</p>
                            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">
                Hobby Groups
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groups.map((group) => (
                    <div
                        key={group._id}
                        className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
                    >
                        <img
                            src={group.imageUrl}
                            alt={group.groupName}
                            className="w-full md:w-1/3 h-48 md:h-auto object-cover"
                        />
                        <div className="p-4 flex flex-col justify-between space-y-2 flex-1">
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold mb-1">{group.groupName}</h2>
                                <p className="text-sm text-gray-600">{group.description}</p>
                                <p className="text-xs sm:text-sm text-gray-500 mt-2">📍 {group.location}</p>
                                <p className="text-xs sm:text-sm text-gray-500">👥 Max Members: {group.maxMembers}</p>
                                <p className="text-xs sm:text-sm text-gray-500">📅 Starts: {group.startDate}</p>
                            </div>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition self-start">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div> */}
    </>
    );
};

export default Home;