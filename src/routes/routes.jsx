import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import SkillDetails from "../pages/SkillDetails";
import MyProfile from "../pages/MyProfile";
import PrivateRouter from "../provider/PrivateRouter";
import ForgetPassword from "../pages/ForgetPassword";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"/profile",
                element:<PrivateRouter><MyProfile></MyProfile></PrivateRouter>
            }
        ]
    },
    {
        path:"/skilldetails/:id",
        element: <PrivateRouter><SkillDetails></SkillDetails></PrivateRouter>,
        loader:()=> fetch("/skilldata.json")
    },
    {
        path:"auth",
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:"/auth/login",
                element:<Login></Login>
            },
            {
                path:"/auth/signup",
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path:"/forget/:email",
        element:<ForgetPassword></ForgetPassword>
    }
])