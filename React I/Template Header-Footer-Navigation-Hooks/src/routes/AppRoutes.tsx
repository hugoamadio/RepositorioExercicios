import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Categories from "../pages/Categories";
import Error404 from "../pages/Error404";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error404/>
    },
    {
        path: '/contact',
        element: <Contact/>
    },
    {
        path: '/categories',
        element: <Categories/>
    }
])

function AppRoutes(){
    return <RouterProvider router={router}/>
}

export default AppRoutes