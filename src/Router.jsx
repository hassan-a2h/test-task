import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from './Users';

const Router = () => {
  const routes = [
    {
      path: '/',
      element: <Users />
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router}/>
  );
};

export default Router;