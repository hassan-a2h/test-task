import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from './Users';
import ErrorRoute from './components/Error';
import Form from './components/Form';

const Router = () => {
  const routes = [
    {
      path: '/',
      element: <Users />,
      errorElement: <ErrorRoute />
    },
    {
      path: 'new_user',
      element: <Form />
    }
  ];

  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router}/>
  );
};

export default Router;