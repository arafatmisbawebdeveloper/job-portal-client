import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRouter from "./PrivateRouter";
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
       }
    ],
  },
]);
export default router;
