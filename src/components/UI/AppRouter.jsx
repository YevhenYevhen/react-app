import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../../router/router'
import { AuthContext } from '../context/AuthContext'


/* const AppRouter = () => {
    const isAuth = false;
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                    exact={route.exact}
                />
            )}
             {isAuth && privateRoutes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                    exact={route.exact}
                />
            )}
        </Routes>
    )
}

export default AppRouter */




const AppRouter = () => {
    const { isAuth } = useContext(AuthContext)
    return (
        <>
            {!isAuth
                ? <Routes>
                    {
                        publicRoutes.map(route =>
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<route.element />}
                                exact={route.exact}
                            />
                        )
                    }
                </Routes>
                : <Routes>
                    {
                        privateRoutes.map(route =>
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<route.element />}
                                exact={route.exact}
                            />
                        )
                    }
                </Routes>
            }
        </>
    )
}

export default AppRouter

