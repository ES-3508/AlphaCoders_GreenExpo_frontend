import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/auth/LoginPage";
import RootLayout from "./Components/RootLayout";
import ErrorRoutes from "./Pages/error/ErrorRoutes";
import HomePage from "./Pages/home/HomePage";
import AboutPage from "./Pages/about/AboutPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorRoutes />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
      ],
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <LoginPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
