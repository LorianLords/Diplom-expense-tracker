import React from "react";
import { Route, useLocation } from "react-router-dom";
import { Navigate, Routes } from "react-router";
import { PageWrapper } from "../../components/page-wrapper";
import {
  PUBLIC_ROUTES,
  ROUTES_NAMES,
  privatePages,
  publicPages,
  PRIVATE_ROUTES,
} from "./routing.data";

export const AppRouter = () => {
  const isAuthorized = true;
  const { pathname } = useLocation();

  return (
    <>
      {isAuthorized && (
        <PageWrapper>
          <Routes>
            {PRIVATE_ROUTES.map(({ path, element: Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
            {!privatePages.includes(pathname) && (
              <Navigate to={ROUTES_NAMES.MAIN} />
            )}
          </Routes>
        </PageWrapper>
      )}
      {!isAuthorized && (
        <Routes>
          {PUBLIC_ROUTES.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
          {!publicPages.includes(pathname) && (
            <Navigate to={ROUTES_NAMES.HOME} />
          )}
        </Routes>
      )}
    </>
  );
};
