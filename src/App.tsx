import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Restaurant } from "./pages/Restaurant";
import { User } from "./pages/User";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/restaurant",
    element: <Restaurant />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
