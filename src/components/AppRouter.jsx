import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/router';
import { AuthContext } from './context/AuthContext';

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div>
      {!isAuth ? (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
              exact={route.exact}
            />
          ))}
        </Routes>
      ) : (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
              exact={route.exact}
            />
          ))}
        </Routes>
      )}
    </div>
  );
};

export default AppRouter;
