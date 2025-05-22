import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            I am Home
        </div>
    );
};

export default Home;