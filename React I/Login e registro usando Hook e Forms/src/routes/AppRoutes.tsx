import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Error404 from '../pages/Error404';
import Register from '../pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <Error404 />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
