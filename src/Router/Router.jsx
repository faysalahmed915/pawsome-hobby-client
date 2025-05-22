import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/AuthPages/Login";
import SignUp from "../components/AuthPages/Signup";
import ContactUs from "../Pages/ContactUs";
import CreateGroup from "../Pages/CreatGroup";
import PrivateRout from "../Provider/PrivateRout";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                element: <h1>Home</h1>
            },
            {
                path: "/explore",
                element: <h1>Explore</h1>,
            },
            {
                path: "/creatGroup",
                element: <PrivateRout><CreateGroup /></PrivateRout>,
            },
            {
                path: "/MyGroup",
                element: <PrivateRout><h1>My Group</h1></PrivateRout>,
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