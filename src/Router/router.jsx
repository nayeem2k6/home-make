import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import AddProperty from "../Pages/AddProperty";
import AllProperties from "../Pages/AllProperties";
import Home from "../Pages/Home";
import PropertyDetails from "../Pages/PropertyDetails";
import MyProperties from "../Pages/MyProperties";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateProperty from "../Pages/Update";
import MyRatings from "../Pages/MyRatings";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("https://home-nest-ten.vercel.app/latest-homes"),
      },
      {
        path: "/rating",
        element: (
          <PrivateRoute>
            <MyRatings></MyRatings>
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/update/:id",
        Component: UpdateProperty,
        loader: ({ params }) =>
          fetch(`https://home-nest-ten.vercel.app/users/${params.id}`),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/Properties",
        element: (
          <PrivateRoute>
            <AddProperty></AddProperty>
          </PrivateRoute>
        ),
      },
      {
        path: "/all",
        Component: AllProperties,
        loader: () => fetch("https://home-nest-ten.vercel.app/Homes"),
      },
      {
        path: "/view/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails></PropertyDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my",
        element: (
          <PrivateRoute>
            <MyProperties></MyProperties>
          </PrivateRoute>
        ),
        loader: () => fetch("https://home-nest-ten.vercel.app/users"),
      },
    ],
    errorElement: <NotFound></NotFound>,
  },
]);

export default router;
