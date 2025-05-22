import React, { use } from 'react';
import { FaPaw } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import PhotoUser from '../Profile/PhotoUser';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const navigate = useNavigate();
    // const photo = user.photoURL;
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("User logged out successfully");
                navigate("/");
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    const links = (
        <>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-gray-500"}>Home</NavLink>
            {user && <NavLink to="/Profile" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-gray-500"}>Profile</NavLink>}
            <NavLink to="/explore" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-gray-500"}>Explore</NavLink>
            <NavLink to="/createGroup" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-gray-500"}>Create Group</NavLink>
            {user && <NavLink to="/MyGroup" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-gray-500"}>My Groups</NavLink>}
            <NavLink to="/contactUs" className={({ isActive }) => isActive ? "text-[#176AE5] font-bold" : "text-gray-500"}>Contact Us</NavLink>
        </>
    );
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="text-xl font-bold hidden lg:flex lg:items-center gap-1">
                        <FaPaw className="text-[#176AE5] text-2xl" /> Pawsome Hobby</Link>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">

                    {user?.photoURL ? (
                        <PhotoUser />
                    ) : (
                        <span className="text-sm text-gray-600">{user?.email}</span>
                    )}

                    {
                        user ? (
                            <button onClick={handleLogOut} className="btn rounded-3xl bg-[#176AE5] text-white">
                                <Link to="/login">Logout</Link>
                            </button>
                        ) : (
                            <div className="flex gap-4">
                                <Link to="/login" className="btn rounded-3xl bg-[#176AE5] text-white">
                                    Login
                                </Link>
                                <Link to="/signUp" className="btn rounded-3xl bg-[#176AE5] text-white">
                                    Sign Up
                                </Link>
                            </div>
                        )
                    }



                </div>
            </div>
        </div>

    );
};

export default Navbar;