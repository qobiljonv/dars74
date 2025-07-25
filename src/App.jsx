import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import { Home, Login, Profile, Signup, SingleImage } from "./pages";

import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const { user } = useSelector((store) => store.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/singleImage",
          element: <SingleImage />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
