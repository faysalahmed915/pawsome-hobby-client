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
import MyGroups from "../Pages/MyGroups";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../Pages/DashboardHome";
import FAQ from "../Pages/FAQ";

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
                loader: async () => {
                    const res = await fetch('https://pawsome-hobby-server.vercel.app/createGroup');
                    return res.json();
                },
                hydrateFallbackElement: <h1>Loading...</h1>,
            },
            {
                path: "/createGroup",
                element: <PrivateRout><CreateGroup /></PrivateRout>,
            },
            {
                path: "/faq",
                element: <FAQ></FAQ>,
            },
            {
                path: "groups",
                Component: AllGroups,
                loader: async () => {
                    const res = await fetch('https://pawsome-hobby-server.vercel.app/createGroup');
                    return res.json();
                },
                hydrateFallbackElement: <h1>Loading...</h1>,
            },
            {
                path: "/group/:_id",
                element: <PrivateRout><GroupDetails></GroupDetails></PrivateRout>,
                loader: async () => {
                    const res = await fetch('https://pawsome-hobby-server.vercel.app/createGroup');
                    return res.json();
                },
                hydrateFallbackElement: <h1>Loading...</h1>,
            },
            {
                path: '/updateGroup/:id',
                element: <PrivateRout><UpdateGroup></UpdateGroup></PrivateRout>,
                loader: async ({ params }) => {
                    const res = await fetch(`https://pawsome-hobby-server.vercel.app/createGroup/${params.id}`);
                    return res.json();
                },
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
    },
    {
        path: '/dashboard',
        element: <PrivateRout>
            <DashboardLayout></DashboardLayout>
        </PrivateRout>,
        children: [
            {
                path: "MyGroup",
                element: <PrivateRout>
                    <MyGroups></MyGroups>
                </PrivateRout>,
                loader: async () => {
                    const res = await fetch('https://pawsome-hobby-server.vercel.app/createGroup');
                    return res.json();
                },
                hydrateFallbackElement: <h1>Loading...</h1>,
            },
            {
                path: "Profile",
                element: <PrivateRout><Profile /></PrivateRout>,
            },
            {
                path: "dashboardHome",
                element: <PrivateRout><DashboardHome></DashboardHome></PrivateRout>,
                loader: async () => {
                    const res = await fetch('https://pawsome-hobby-server.vercel.app/createGroup');
                    return res.json();
                },
                hydrateFallbackElement: <h1>Loading...</h1>,
            }
        ]
    }
])