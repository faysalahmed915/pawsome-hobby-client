import React from 'react';
import { Link } from 'react-router';

const GroupRow = ({ group, index }) => {
    console.log(group);
    const { _id, groupName, location, startDate } = group;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{groupName}</td>
            <td>{location || 'Not Selected'}</td>
            <td>{startDate}</td>
            <td>
                <div className="flex">
                    <Link to={`/group/${group._id}`} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                        Details
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default GroupRow;