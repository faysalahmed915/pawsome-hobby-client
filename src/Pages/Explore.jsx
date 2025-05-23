import React from 'react';
import { useLoaderData } from 'react-router';
import GroupDetails from '../components/Group/GroupDetails';
import Group from '../components/Group/Group';

const Explore = () => {
    const groups = useLoaderData();
    return (<>

    <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Hobby Groups</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {groups.map((group) => (
                    <Group key={group._id} group={group}></Group>


                ))}
            </div>
        </div>




        {/* {
            groups.map((group) => (
               <GroupDetails key={group._id} group={group}></GroupDetails>
            ))
        } */}





        

    </>
    );
};

export default Explore;