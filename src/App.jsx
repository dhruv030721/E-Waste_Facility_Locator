import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home_page';
import LoginPage from './pages/login_page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;