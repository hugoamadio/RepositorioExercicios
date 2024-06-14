import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import TermsPage from "../Pages/TermsPage";
import PrivacityPage from "../Pages/PrivacityPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/termsofuse",
        element: <TermsPage/>
    },
    {
        path: "/privacy",
        element: <PrivacityPage/>
    }
])

function AppRoutes(){
    return <RouterProvider router={router}/>
}

export default AppRoutes