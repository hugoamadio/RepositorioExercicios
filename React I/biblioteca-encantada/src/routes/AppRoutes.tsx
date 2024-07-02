import { RouterProvider, createBrowserRouter } from "react-router-dom";
import View from "../pages/View";
import Error from "../pages/Error";
import Add from "../pages/Add";
import Delete from "../pages/Delete";
import Edit from "../pages/Edit";

const router = createBrowserRouter([
    {
        path: '/',
        element: <View/>,
        errorElement: <Error/>
    },
    {
        path: '/add',
        element: <Add/>
    },
    {
        path: '/delete',
        element: <Delete/>
    },
    {
        path: '/edit',
        element: <Edit/>
    }
])

function AppRoutes(){
    return <RouterProvider router={router}/>
}

export default AppRoutes