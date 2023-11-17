import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home_page";
import LoginPage from "./pages/login_page";
import SignupPage from "./pages/signup_page";
import UserSide from "./pages/userSide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/UserSide",
    element: <UserSide />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
