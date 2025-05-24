import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/AuthPages/Login";
import SignUp from "../components/AuthPages/Signup";
import ContactUs from "../Pages/ContactUs";
import CreateGroup from "../Pages/CreateGroup";
import PrivateRout from "../Provider/PrivateRout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import GroupDetails from "../components/Group/GroupDetails";
import UpdateGroup from "../components/Group/UpdateGroup";
import AllGroups from "../Pages/AllGroups";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
                // loader: async () => {
                //     const res = await fetch('https://pawsome-hobby-server.vercel.app/createGroup');
                //     return res.json();
                // },
                loader: async () => {
                    const res = await fetch('http://localhost:3000/createGroup');
                    return res.json();
                },
               
                hydrateFallbackElement: <h1>Loading...</h1>,
            },
            {
                path: "/Profile",
                element: <PrivateRout><Profile/></PrivateRout>,
            },
            {
                path: "/groups",
                Component: AllGroups,
                loader: async () => {
                    const res = await fetch('http://localhost:3000/createGroup');
                    return res.json();
                },
            //    loader: async () => {
            //         const res = await fetch('https://pawsome-hobby-server.vercel.app/createGroup');
            //         return res.json();
            //     },
                hydrateFallbackElement: <h1>Loading...</h1>,
            },
            {
                path: "/createGroup",
                element: <PrivateRout><CreateGroup /></PrivateRout>,
            },
            {
                path: "/MyGroup",
                element: <PrivateRout><h1>My Group</h1></PrivateRout>,
            },
            {
                path: "/group/:_id",
                element: <GroupDetails></GroupDetails>,
                loader: async () => {
                    const res = await fetch('http://localhost:3000/createGroup');
                    return res.json();
                },
            //    loader: async () => {
            //         const res = await fetch('https://pawsome-hobby-server.vercel.app/createGroup');
            //         return res.json();
            //     },
                hydrateFallbackElement: <h1>Loading...</h1>,
            },
            {
                path: '/updateGroup/:id',
                element: <UpdateGroup></UpdateGroup>,
                loader: async ({params}) => {
                    const res = await fetch(`http://localhost:3000/createGroup/${params.id}`);
                    return res.json();
                },
            //    loader: async () => {
            //         const res = await fetch('https://pawsome-hobby-server.vercel.app/createGroup');
            //         return res.json();
            //     },
                hydrateFallbackElement: <h1>Loading...</h1>,

            },
            {
                path: "/contactUs",
                Component: ContactUs,
            },
            {
                path: '/Login',
                Component: Login,
            },
            {
                path: '/Signup',
                Component: SignUp,
            },

        ]
    }
])