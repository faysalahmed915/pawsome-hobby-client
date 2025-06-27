import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Group from '../components/Group/Group';
import TypewriterComponent from '../components/HomeComponents/TypewriterComponent ';

const AllGroups = () => {
    const allGroupsData = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const hobbyCategories = [
        'Drawing & Painting',
        'Photography',
        'Video Gaming',
        'Fishing',
        'Running',
        'Cooking',
        'Reading',
        'Writing'
    ];

    // Categorize groups
    const categorizedGroups = allGroupsData.reduce((acc, group) => {
        const category = hobbyCategories.includes(group.category) ? group.category : 'Others';
        if (!acc[category]) acc[category] = [];
        acc[category].push(group);
        return acc;
    }, {});

    // All categories including 'Others'
    const allCategories = ['All', ...hobbyCategories, 'Others'];

    // Filter groups based on selected category
    const filteredGroups = selectedCategory === 'All'
        ? allGroupsData
        : categorizedGroups[selectedCategory] || [];

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <TypewriterComponent />

            {/* Category Filter Dropdown */}
            <div className="flex justify-end mb-6">
                <select
                    className="select select-bordered w-full max-w-xs"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {allCategories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Filtered Group Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredGroups.length > 0 ? (
                    filteredGroups.map(group => (
                        <Group key={group._id} group={group} />
                    ))
                ) : (
                    <p className="text-center col-span-full text-lg font-medium">
                        No groups found for "{selectedCategory}"
                    </p>
                )}
            </div>
        </div>
    );
};

export default AllGroups;
