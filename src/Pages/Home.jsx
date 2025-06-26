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
import GroupCarousel from '../components/HomeComponents/GroupCarousel';




const Home = () => {
    // const { fetchedData } = useContext(UserContext);

    const { user } = useContext(AuthContext)
    // console.log(user.email)
    const allGroups = useLoaderData();
    // console.log(allGroups)
    const allOtherGroup = allGroups.filter(
        group => group?.userEmail !== user?.email);
    // console.log(allOtherGroup)
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





    return (
        <div className="max-w-7xl mx-auto">


            <Helmet>
                <title>HobbyHub | Home</title>
            </Helmet>

            <HobbyAwesomeReveal />

            <TypewriterComponent></TypewriterComponent>


            <GroupCarousel></GroupCarousel>


            {/* view group */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {groups.map((group) => (
                    <Group key={group._id} group={group}></Group>


                ))}
            </div>


            <StaticSectionTwo />

            {/* Banner with 3+ slides */}
            <div className='max-w-7xl mx-auto py-6 bg-base-100 rounded-2xl shadow-lg'>
                {/* <Banner /> */}
                <AddCountUp></AddCountUp>
            </div>

            {/* Featured Groups (limit to 6) */}
            {/* <FeaturedGroups /> */}

            {/* Two extra static sections */}
            <StaticSectionOne />




        </div>



    );
};

export default Home;