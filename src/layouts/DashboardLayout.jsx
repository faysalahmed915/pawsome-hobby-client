import React from 'react';
import { NavLink, Outlet } from 'react-router';
import { FaHome, FaBoxOpen, FaMoneyCheckAlt, FaUserEdit, FaSearchLocation, FaUserCheck, FaUserClock } from 'react-icons/fa';
import Logo from '../components/Shared/logo';

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* Navbar */}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none ">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>

                </div>
                {/* Page content here */}
                <Outlet></Outlet>
                {/* Page content here */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <div className='w-32 py-8'>
                        <Logo></Logo>
                    </div>
                    <li>
                        <NavLink to="/dashboard/Profile"
                        className={({ isActive }) => isActive ? "text-[#2fe517] font-bold" : "text-secondary"}>
                            <FaHome className="inline-block mr-2" />
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/groups"
                        className={({ isActive }) => isActive ? "text-[#2fe517] font-bold" : "text-secondary"}>
                            <FaBoxOpen className="inline-block mr-2" />
                            All Groups
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/MyGroup"
                        className={({ isActive }) => isActive ? "text-[#2fe517] font-bold" : "text-secondary"}>
                            <FaBoxOpen className="inline-block mr-2" />
                            My Groups
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/createGroup"
                        className={({ isActive }) => isActive ? "text-[#2fe517] font-bold" : "text-secondary"}>
                            <FaBoxOpen className="inline-block mr-2" />
                            Creat Group
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;