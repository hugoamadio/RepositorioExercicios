import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import PageError from "../pages/PageError"
import Page1 from "../pages/Page1"
import Page2 from "../pages/Page2"
import Page3 from "../pages/Page3"
import Page4 from "../pages/Page4"

const route = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <PageError/>
    },
    {
        path: "/page1",
        element: <Page1/>
    },
    {
        path: "/page2",
        element: <Page2/>
    },
    {
        path: "/page3",
        element: <Page3/>
    },
    {
        path: "/page4",
        element: <Page4/>
    }
])

function AppRoutes(){
    return <RouterProvider router={route}/>
}

export default AppRoutes