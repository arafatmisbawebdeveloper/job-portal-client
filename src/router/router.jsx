import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import JobApply from "../pages/JobApply/JobApply";
import PrivateRouter from "./PrivateRouter";
import Hotjobs from "../pages/Home/Hotjobs";
import MyApplications from "../pages/MyApplications/myApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path : "/register",
        element : <Register />,
      },
      {
        path : "/login",
        element : <SignIn />,    
       },
       {
        path : "/jobs/:id",
        element : <PrivateRouter><JobDetails /></PrivateRouter>,
        loader : ({params}) => {
          return fetch(`http://localhost:3000/jobs/${params.id}`)
          
        },
       },
       {
        path : "/jobApply/:id",
        element : <PrivateRouter><JobApply /></PrivateRouter>,
       },
       {
        path : "/myApplications",
        element : <PrivateRouter><MyApplications></MyApplications> </PrivateRouter>,
       },
       {
        path : "/Hotjobs",
        element : <Hotjobs></Hotjobs>,
       }
    ],
  },
]);
export default router;
