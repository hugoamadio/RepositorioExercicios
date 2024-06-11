import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Product from "../pages/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/products",
        element: <Product/>
    }
])

function AppRoutes(){
    return <RouterProvider router={router} />
}

export default AppRoutes