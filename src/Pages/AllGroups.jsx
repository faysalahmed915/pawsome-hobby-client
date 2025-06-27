import React from 'react';
import { useLoaderData } from 'react-router';
import GroupDetails from '../components/Group/GroupDetails';
import Group from '../components/Group/Group';
import TypewriterComponent from '../components/HomeComponents/TypewriterComponent ';

const AllGroups = () => {
    const groups = useLoaderData();
    return (<div className="p-6 max-w-7xl mx-auto">
        <TypewriterComponent></TypewriterComponent>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {groups.map((group) => (
                    <Group key={group._id} group={group}></Group>


                ))}
            </div>
        </div>
    );
};

export default AllGroups;