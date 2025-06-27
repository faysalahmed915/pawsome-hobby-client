import React from 'react';
// import { useNavigate } from 'react-router';
import GroupRow from './GroupRow';

const MyGroup = ({ myGroups }) => {
    // console.log(group._id)
    // const navigate = useNavigate()


    // const handleDelete = () => {
    //     console.log(group._id)
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         console.log(result.isConfirmed)
    //         if (result.isConfirmed) {

    //             fetch(`https://pawsome-hobby-server.vercel.app/createGroup/${group._id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log('after delete', data)
    //                 })
    //             Swal.fire({
    //                 title: "Deleted!",
    //                 text: "Your file has been deleted.",
    //                 icon: "success"
    //             });

    //             navigate('/MyGroup')
    //         }
    //     });
    // }

    return (
        // <div className="overflow-x-auto">
        //     <table className="table w-full border border-gray-300">
        //         <thead className="bg-gray-100">
        //             <tr>
        //                 <th>Number</th>
        //                 <th>Group Name</th>
        //                 <th>Hobby</th>
        //                 <th>Max Members</th>
        //                 <th>Start Date</th>
        //                 <th>Location</th>
        //                 <th>Actions</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {/* //                             {myGroups.map((group, index) => ( */}
        //             <tr key={group._id}>
        //                 <td>{index+1}</td>
        //                 <td>{group.groupName}</td>
        //                 <td>{group.hobbyCategory}</td>
        //                 <td>{group.maxMembers}</td>
        //                 <td>{group.startDate}</td>
        //                 <td>{group.location}</td>
        //                 <td>
        //                     <Link to={`/updateGroup/${group._id}`}>
        //                         <button className="text-white px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition mr-2">Update</button>
        //                     </Link>
        //                     <button
        //                         onClick={() => handleDelete(group._id)}
        //                         className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
        //                     >
        //                         Delete
        //                     </button>
        //                 </td>
        //             </tr>
        //             {/* ) */}

        //             {/* )} */}
        //         </tbody>
        //     </table>
        // </div>

        <div className="overflow-x-auto w-full">
            <table className="table table-zebra w-full bg-base-100 text-base-content rounded-box border border-base-300">
                <thead className="bg-base-200 text-base-content">
                    <tr>
                        <th>No</th>
                        <th>Group Name</th>
                        <th>Location</th>
                        <th>Start Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {myGroups.map((group, index) => (
                        <GroupRow key={group._id}
                        group={group}
                        index={index}></GroupRow>
                        // <tr key={group._id}>
                        //     <td>{index + 1}</td>
                        //     <td>{group.groupName}</td>
                        //     <td>{group.hobbyCategory}</td>
                        //     <td>{group.maxMembers}</td>
                        //     <td>{group.startDate}</td>
                        //     <td>{group.location}</td>
                        //     <td className='flex items-center gap-2'>
                        //         <Link to={`/updateGroup/${group._id}`}>
                        //             <button className="text-white px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition mr-2">Update</button>
                        //         </Link>
                        //         <button
                        //             onClick={() => handleDelete(group._id)}
                        //             className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
                        //         >
                        //             Delete
                        //         </button>
                        //     </td>
                        // </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default MyGroup;