import React, { useContext, useState } from 'react';
import ProfileUpdateModal from '../components/Profile/ProfileUpdateModal';
import { AuthContext } from '../Provider/AuthProvider';
import SocialsProfile from '../components/Profile/SocialsProfile';

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profileData, setProfileData] = useState(null);

    const defaultName = 'Anonymous User';
    const defaultEmail = 'Email not available';
    const defaultPhoto = 'https://ui-avatars.com/api/?name=User&background=random';
    const defaultBio =
        "👋 Welcome! This user hasn't written a bio yet. Come back later for more info.";

    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user || {};


    const handleSave = (data) => {
        console.log('Updated Profile:', data);
        setProfileData(data);
    };

    return (
        <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mt-10">
            {/* Cover */}
            <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 relative">
                <div className="absolute -bottom-14 left-6">
                    <img
                        className="h-28 w-28 rounded-full border-4 border-white shadow-lg object-cover"
                        src={photoURL || defaultPhoto}
                        alt={displayName || defaultName}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="pt-20 pb-8 px-6 sm:px-10 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">
                            {displayName || defaultName}
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">
                            {email || defaultEmail}
                        </p>
                    </div>

                    <div className="mt-6 sm:mt-0 flex flex-wrap gap-3 justify-center sm:justify-end">

                        {/* <button className="bg-gray-200 text-gray-700 px-5 py-2.5 rounded-xl hover:bg-gray-300 transition">
                            Message
                        </button> */}

                        {/* search option */}

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-4 pr-10 py-2.5 rounded-xl bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-60 transition"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z" />
                            </svg>
                        </div>


                        <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition">
                            My Groups
                        </button>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition"
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* Bio */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800">About</h3>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">{defaultBio}</p>
                </div>

                {/* Social Links */}
                <SocialsProfile></SocialsProfile>
            </div>

            {/* Profile Update Modal */}
            <ProfileUpdateModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                initialData={profileData}
            />
        </div>
    );
};

export default Profile;
