import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { DEFAULT_PATH } from "./path";
import LoadingScreen from "../component/LoadingScreen";
import DashboardLayout from "../layouts/dashboardLayout";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "home", element: <HomePage /> },
        { path: "details/:id", element: <DetailsPage /> },


        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const HomePage = Loadable(lazy(() => import("../pages/Home")));
const DetailsPage = Loadable(lazy(() => import("../pages/DetailsPage")))
const Page404 = Loadable(lazy(() => import("../pages/Page404")));