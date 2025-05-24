import React, { useContext } from 'react';
// import { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router';
import Banner from '../components/HomeComponents/Banner';
// import FeaturedGroups from '../components/HomeComponents/FeaturedGroups';
import StaticSectionOne from '../components/HomeComponents/StaticSectionOne';
import StaticSectionTwo from '../components/HomeComponents/StaticSectionTwo';
import TypewriterComponent from '../components/HomeComponents/TypewriterComponent ';
import HobbyAwesomeReveal from '../components/HomeComponents/HobbyAwesomeReveal';
import Group from '../components/Group/Group';
import { AuthContext } from '../Provider/AuthProvider';
// import CountUp from '../components/CountUp/AddCountUp';
import AddCountUp from '../components/CountUp/AddCountUp';




const Home = () => {
    // const { fetchedData } = useContext(UserContext);

    const { user } = useContext(AuthContext)
    console.log(user.email)
    const allGroups = useLoaderData();
    console.log(allGroups)
    const allOtherGroup = allGroups.filter(
        group => group.userEmail !== user.email);
    console.log(allOtherGroup)
    const today = new Date();

    const filteredGroups = allOtherGroup.filter(group => {
        const startDate = new Date(group.startDate);
        startDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        return startDate >= today;
    });

    const groups = filteredGroups.slice(0, 6);

    // const shuffledGroups = [...allGroups].sort(() => Math.random() - 0.5);
    // const groups = shuffledGroups.slice(0, 6);





    return (<>


        <div>

            <Helmet>
                <title>HobbyHub | Home</title>
            </Helmet>



            <HobbyAwesomeReveal />


            <TypewriterComponent></TypewriterComponent>

            {/* view group */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {groups.map((group) => (
                    <Group key={group._id} group={group}></Group>


                ))}
            </div>


            <StaticSectionTwo />

            {/* Banner with 3+ slides */}
            <div className='max-w-xl mx-auto py-10'>
                <Banner />
            </div>

            {/* Featured Groups (limit to 6) */}
            {/* <FeaturedGroups /> */}

            {/* Two extra static sections */}
            <StaticSectionOne />
            
            
            <AddCountUp></AddCountUp>


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