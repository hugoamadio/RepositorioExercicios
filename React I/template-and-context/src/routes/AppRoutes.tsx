import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Products from '../pages/Products';
import Categories from '../pages/Categories';
import Create from '../pages/Create';
import Login from '../pages/Login';
import Contacts from '../pages/Contacts';
import ShowContacts from '../pages/ShowContacts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <Error404 />,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/categories',
    element: <Categories />,
  },
  {
    path: '/create',
    element: <Create />,
  },
  {
    path: '/contacts',
    element: <Contacts/>
  },
  {
    path: '/showcontacts',
    element: <ShowContacts/>
  }
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
