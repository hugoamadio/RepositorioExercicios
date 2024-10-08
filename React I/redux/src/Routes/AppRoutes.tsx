import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    }
])

function AppRoutes(){
    return <RouterProvider router={router}/>
}

export default AppRoutes