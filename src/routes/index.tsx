import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Loading from "src/components/Loading";
import Layout from "src/layout";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const componentsMap = {
  Layout: Layout,

  Home: lazy(() => delay(3000).then(() => import("src/pages/MapView"))),
};

const routeConfigs = [
  {
    path: "/",
    component: componentsMap.Layout,
    children: [{ path: "/", component: componentsMap.Home, isIndex: true }],
  },
];

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routeConfigs.map((route) => {
          if (route.children) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              >
                {route.children.map((child) => (
                  <Route
                    key={child.path}
                    path={child.path}
                    element={<child.component />}
                  />
                ))}
              </Route>
            );
          }
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
