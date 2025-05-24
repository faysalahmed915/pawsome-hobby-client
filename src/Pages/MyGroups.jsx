import React, { useContext } from 'react';
import NoGroup from '../components/Group/NoGroup';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import MyGroup from '../components/Group/MyGroup';

const MyGroups = () => {
    const allGroups = useLoaderData()
    console.log(allGroups)
    const {user} = useContext(AuthContext)

    const myGroups = allGroups.filter(group => group.userEmail === user.email)

    console.log(myGroups)
    return (
        <div>
            
          {/* grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  */}
            {
        myGroups.length > 0 ? (
          <div className="py-6 grid px-2 md:px-10 lg:px-20 gap-6">
                {myGroups.map((group) => (
                    <MyGroup key={group._id} group={group}></MyGroup>


                ))}
            </div>
        ) : (
          <NoGroup />
        )
      }
        </div>
    );
};

export default MyGroups;