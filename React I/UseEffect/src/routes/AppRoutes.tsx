import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Count from "../pages/Count";
import Atividade from "../pages/Atividade";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/count",
    element: <Count />,
  },
  {
    path: '/atividade',
    element: <Atividade/>
  }
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
